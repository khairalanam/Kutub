import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/Logo.svg";
import github from "../../public/github.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-main">
        <Image src={logo} alt="Logo" className="logo" />
        <h1>KUTUB</h1>
      </div>
      <ul>
        <Link href="/" className="nav-links">
          Home
        </Link>
        <Link href="/about" className="nav-links">
          About
        </Link>
        <Link href="/books" className="nav-links">
          Books
        </Link>
        <Link href="/socials" className="nav-links">
          Socials
        </Link>
        <Link href="/" className="nav-links">
          <Image src={github} alt="github logo" id="github" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
