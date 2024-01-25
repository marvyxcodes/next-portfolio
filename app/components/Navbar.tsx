import React from "react";
import Link from "next/link";
import Image from "next/image";
import enticingVisions from "@/app/images/enticingVisions.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const paths = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/portfolio",
      name: "Portfolio",
    },
    {
      path: "/about",
      name: "About",
    },

    {
      path: "/contact",
      name: "Contact",
    },
  ];

  let navLinks = paths.map((item) => {
    return (
      <Link key={item.path} className="nav-link m-2" href={item.path}>
        <div
          className="w-100"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          {item.name}
        </div>
      </Link>
    );
  });

  return (
    <nav className={styles.navbar}>
      <Link href="/" className="nav-logo">
          <Image
            className="logo"
            alt="Enticing Visions Signature Logo"
            src={enticingVisions}
            width={50}
            height={50}
          ></Image>
        </Link>
        <div className={styles.menu}>
        {navLinks}
        </div>
    </nav>
  );
};

export default Navbar;


// previous nav
{/* <nav className="navbar navbar-expand-md pt-3">
      <div className="container-fluid">
      <Link href="/" className="navbar-brand">
          <Image
            className="logo"
            alt="Enticing Visions Signature Logo"
            src={enticingVisions}
          ></Image>
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar top-bar"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">{navLinks}</div>
        </div>
        
      </div>
    </nav> */}