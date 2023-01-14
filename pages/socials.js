import React from "react";
import GifAnimation from "../src/components/GifAnimation";

const SocialsPage = () => {
  return (
    <section className="social-section">
      <div className="hero-text">
        <h1>
          Meet the creator of <div>Kutub</div>. <br />
          The Decentralized Bookstore.
        </h1>
        <ul>
          <a
            href="https://www.linkedin.com/in/khair-alanam-b27b69221/"
            className="social-links"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/khair_alanam"
            className="social-links"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/khairalanam"
            className="social-links"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.behance.net/khairalanam"
            className="social-links"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Behance
          </a>
        </ul>
      </div>
      <GifAnimation />
    </section>
  );
};

export default SocialsPage;
