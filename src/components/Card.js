import Image from "next/image";
import React from "react";

const Card = ({ bookData }) => {
  return (
    <section className="card-section">
      <div>
        <div className="book-image">
          <Image
            loader={() => bookData.formats["image/jpeg"]}
            src={bookData.formats["image/jpeg"]}
            alt="image"
            width="150"
            height="200"
            className="book"
          />
        </div>
        <h4 className="book-title">{bookData.title}</h4>
        <h5 style={{ color: "#999999", marginTop: "0.5em" }}>
          By {bookData.authors.map((author) => author.name)}
        </h5>
      </div>
      <div>
        <h5 style={{ color: "#999999", marginTop: "0.5em" }}>
          Downloads: {bookData.download_count}
        </h5>
        <h3>§ {Math.round(bookData.id / 10)}</h3>
        <button>Buy this Book</button>
      </div>
    </section>
  );
};

export default Card;
