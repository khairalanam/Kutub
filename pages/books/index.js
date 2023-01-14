import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../src/components/Card";
import Loader from "../../src/components/Loader";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const BooksPage = ({ data }) => {
  const [bookData, setBookData] = useState(data.results);
  const [mainData, setMainData] = useState(data);
  const [dataCount, setDataCount] = useState(32);
  const [search, setSearch] = useState("");

  const { publicKey } = useWallet();

  const fetchData = async () => {
    const response = await fetch(mainData.next);
    const responseJson = await response.json();
    setDataCount(dataCount + 32);
    setBookData([...mainData.results, ...responseJson.results]);
    setMainData(responseJson);
  };

  return (
    <section className="books-section">
      <div className="hero-text">
        <h1>
          Search across 100,000+ books from <div>Kutub</div>. <br />
          The Decentralized Bookstore.
        </h1>
      </div>
      <div className="basis-1/4">
        <WalletMultiButton
          style={{
            backgroundColor: "#BA181B",
          }}
        />
      </div>
      <div className="search-bar">
        <h2>Search</h2>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <InfiniteScroll
        dataLength={mainData.count - dataCount}
        hasChildren={true}
        next={fetchData}
        hasMore={dataCount > mainData.count ? false : true}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="infinite"
      >
        {bookData
          .filter((book) => {
            return search === ""
              ? book
              : book.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((book) => (
            <>
              <Card key={book.id} bookData={book} publicKey={publicKey} />
            </>
          ))}
      </InfiniteScroll>
    </section>
  );
};

export default BooksPage;

export async function getServerSideProps() {
  const response = await fetch("http://gutendex.com/books");
  const books_data = await response.json();

  return {
    props: {
      data: books_data,
    },
  };
}
