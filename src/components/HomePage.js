import Link from "next/link";
import React from "react";
import GifAnimation from "./GifAnimation";

const HomePage = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          Meet <div>Kutub</div>. <br />
          The Decentralized Bookstore.
        </h1>
        <p>
          Find your desired book among 100,000+ books <br /> powered by the
          blockchain technology.
        </p>
        <Link href="/" className="btn-search">
          Start Searching
        </Link>
      </div>
      <GifAnimation />
    </section>
  );
};

export default HomePage;
