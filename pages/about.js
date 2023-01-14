import Link from "next/link";
import React from "react";
import GifAnimation from "../src/components/GifAnimation";

const About = () => {
  return (
    <section className="about-section">
      <div className="hero-text">
        <h1>
          About <div>Kutub</div>. <br />
          The Decentralized Bookstore.
        </h1>
        <p>
          Kutub is not just a bookstore. It’s a one-of-a-kind bookstore. It’s
          the bookstore of the Web 3.0. When you browse through the huge
          collection of 100,000+ books we have, the books that you have paid for
          are secured by blockchain via Solana Pay and hosted on IPFS.
        </p>
        <Link href="/" className="btn-search">
          Start Searching
        </Link>
      </div>
      <GifAnimation />
    </section>
  );
};

export default About;
