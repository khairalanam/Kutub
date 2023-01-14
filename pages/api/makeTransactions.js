import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { NextApiRequest, NextApiResponse } from "next";
import { shopAddress } from "../../src/libs/addresses.js";

export default async function handler(req, res) {
  try {
    // We pass the selected items in the query, calculate the expected cost
    const amount = 0.01;
    if (amount.toNumber() === 0) {
      res.status(400).json({ error: "Can't checkout with charge of 0" });
      return;
    }

    // We pass the reference to use in the query
    const { reference } = req.query;
    if (!reference) {
      res.status(400).json({ error: "No reference provided" });
      return;
    }

    // We pass the buyer's public key in JSON body
    const { account } = req.body;
    if (!account) {
      res.status(400).json({ error: "No account provided" });
      return;
    }
    const buyerPublicKey = new PublicKey(account);
    const shopPublicKey = shopAddress;

    const network = WalletAdapterNetwork.Devnet;
    const endpoint = clusterApiUrl(network);
    const connection = new Connection(endpoint);

    // Get a recent blockhash to include in the transaction
    const { blockhash } = await connection.getLatestBlockhash("finalized");

    const transaction = new Transaction({
      recentBlockhash: blockhash,
      // The buyer pays the transaction fee
      feePayer: buyerPublicKey,
    });

    // Create the instruction to send SOL from the buyer to the shop
    const transferInstruction = SystemProgram.transfer({
      fromPubkey: buyerPublicKey,
      lamports: amount.multipliedBy(LAMPORTS_PER_SOL).toNumber(),
      toPubkey: shopPublicKey,
    });

    // Add the reference to the instruction as a key
    // This will mean this transaction is returned when we query for the reference
    transferInstruction.keys.push({
      pubkey: new PublicKey(reference),
      isSigner: false,
      isWritable: false,
    });

    // Add the instruction to the transaction
    transaction.add(transferInstruction);

    // Serialize the transaction and convert to base64 to return it
    const serializedTransaction = transaction.serialize({
      // We will need the buyer to sign this transaction after it's returned to them
      requireAllSignatures: false,
    });
    const base64 = serializedTransaction.toString("base64");

    // Insert into database: reference, amount

    // Return the serialized transaction
    res.status(200).json({
      transaction: base64,
      message: "Thanks for your order! 🍪",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({ error: "error creating transaction" });
    return;
  }
}
