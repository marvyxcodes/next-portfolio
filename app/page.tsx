"use client";
import React, { EventHandler, ReactEventHandler, useEffect, useState } from "react";
import linkedIn from "@/app/images/linked-in.svg";
import Image from "next/image";
import Link from "next/link";
import Information from "./components/Information";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";

const Home = () => {


  return (
    <main className={styles.home}>
      {/* INTRO BIO SECTION  */}    
      <div className={styles['bio-div']}>
        <h1 className="">howdy, i'm marvin</h1>
        <p>I'm a full-stack Developer focused on creating solutions and quality of life improvements.</p>
        <p>- avid enjoyor of nature -</p>
        <p>- aspiring retiree programmer & future homesteader -</p>
        <p>- navigating the never ending changes of the technological world -</p>
      </div>
    <section className={styles.content}>
      <Information />
    </section>
    </main>
  );
};

export default Home;



{/* <a
                        href="https://www.linkedin.com/in/marvin-trujillo-b18b84132/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={linkedIn} alt="LinkedIn Social" />
                    </a> */}


//   const skills = {
  //     languages: ["Javascript", "TypeScript"],
  //     frameworks: ["React.js / Redux", "Next.js", "Express.js"],
  //     other: [
  //       "HTML",
  //       "CSS",
  //       "EJS",
  //       "Mongoose",
  //       "Bootstrap",
  //       "Node.js",
  //       "Tailwind UI",
  //     ],
  //     databases: ["Firebase", "mySQL", "MongoDB"],
  //   };

  
// {/* SKILLS SECTION */}
// <div className="d-flex justify-content-end">
// <div className="top-link">
//     <a href="#top" className="chevron text-decoration-underline">
//         &#8593;
//     </a>
// </div>
// </div>