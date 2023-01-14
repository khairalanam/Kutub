import Head from "next/head";
import HomePage from "../src/components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kutub</title>
        <meta name="description" content="Kutub. The Decentralized Bookstore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
