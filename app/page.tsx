"use client";

import React, { useState } from "react";
import linkedIn from "@/app/images/linked-in.svg";
import Image from "next/image";
import Link from "next/link";
import Information from "./components/Information";
import styles from "./page.module.css";

const Home = () => {

  const [currentNavigation, setCurrentNavigation] = useState("info");

  // function handleNavigation(e) {
  //   e.preventDefault();
  //   const target = e.target.id;
  //   setCurrentNavigation(target);
    
  // }

  // console.log(currentNavigation);
  

  return (
    <main className={styles.home}>
      {/* INTRO BIO SECTION  */}
      <header id="top" className={styles.biocard}>
        <div className={styles['bio-div']}>
          <h1 className="">Marvin Trujillo</h1>
          <h2>Full Stack Developer</h2>
          <p></p>
          
        </div>
        <nav className={styles["nav"]}>
          <ul className={styles['nav-list']}>
            <li><a href="#info">Info</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>




      {/* PROJECTS SECTION */}
      
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