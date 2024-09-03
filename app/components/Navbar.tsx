"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import enticingVisions from "@/app/images/enticingVisions.png";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [currentNavigation, setCurrentNavigation] = useState("#info");
  const router = useRouter();

  // function handleNavigation(e) {
  //   e.preventDefault();
  //   const target = e.target.hash;
  //   setCurrentNavigation(target);
  // }

  // function handleActive(e) {
  //   console.log(e.currentTarget);
  //   e.stopPropagation();
  //   e.preventDefault();
  //   if (e.currentTarget.localName === "li") {
  //     const target = e.currentTarget.firstChild.hash;
  //     setCurrentNavigation(target);
  //     router.push(`/${target}`);
  //   }
  // }

  // function handleNavHover(e) {

  // }

  return (
    <nav className={styles["nav"]}>
      <div className={styles['nav-list']}>
        <Link href="/" className="nav">home</Link>
        <Link href="work" className="nav">work</Link>
        <Link href="photography" className="photography">photography</Link>
        <Link href="blog">blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;


