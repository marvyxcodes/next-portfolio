"use client";
import React, { EventHandler, ReactEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Information from "./components/Information";
import styles from "./page.module.css";
import image1 from "./images/frontpg/image1.jpg";
import image2 from "./images/frontpg/image2.jpg";
import image3 from "./images/frontpg/image3.jpg";
import image4 from "./images/frontpg/image4.jpg";
import image5 from "./images/frontpg/image5.jpg";
import image6 from "./images/frontpg/image6.jpg";
import hashtag from "./images/svg/hashtag.svg";

const Home = () => {


  return (
    <>
      {/* INTRO BIO SECTION  */}    
      <div className={styles['bio-div']}>
        <h1 className="">howdy, i'm marvin</h1>
        <p>I'm a full-stack developer focused on creating solutions and quality of life improvements. As an avid enjoyer of nature I love heading down to the nearest creek for a swim, or hiking the farthest mountainsides for a thrill. Hoping to own a part-time homestead in the future.</p>
      </div>
    <section className={styles.content}>
      {/* <Information /> */}
      <div className={styles['photo-section']}>

        <div className={`${styles['photo-container']} ${styles['item-a']}`}>
          <Image 
          className={`${styles['frontpg-img']}`}
          src={image1}
          alt="noAlt"
          >
          </Image>
        </div>

        <div className={`${styles['photo-container']} ${styles['item-b']}`}>
          <Image 
          className={styles['frontpg-img']}
          src={image2}
          alt="noAlt"
          >
          </Image>
        </div>

        <div className={`${styles['photo-container']} ${styles['item-c']}`}>
          <Image
            className={styles['frontpg-img']}
            src={image3}
            alt="noAlt"
          >
          </Image>
        </div>

        <div className={`${styles['photo-container']} ${styles['item-d']}`}>
          <Image 
          className={styles['frontpg-img']}
          src={image4}
          alt="noAlt"
          >
          </Image>
        </div>

        <div className={`${styles['photo-container']} ${styles['item-e']}`}>
          <Image 
          className={styles['frontpg-img']}
          src={image5}
          alt="noAlt"
          >
          </Image>
        </div>

        <div className={`${styles['photo-container']} ${styles['item-f']}`}>
          <Image 
          className={styles['frontpg-img']}
          src={image6}
          alt="noAlt"
          >
          </Image>
        </div>
      </div>
      <div className={styles.random}>
        <p>
          I live by a "Do-It-Yourself" mentality, if I can do it myself with the know-how at my fingertips I might as well do it. Youtube-University and the power of Google Searches has saved me time and money in many areas of my life, and it has produced a never ceasing curiosity of figuring out how things work and why they do.
        </p>
        <p>
          This has led me down a path of learning and developing marketable skills in an evolving technological landscape.
        </p>
      </div>
    </section>
    <button 
          className={styles["socials-btn"]}>
            <Image className={styles.hashtag} src={hashtag} alt="Hashtag Social Media Button"></Image>
      </button>
    </>
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