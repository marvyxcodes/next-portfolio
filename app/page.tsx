"use client";
import React, { EventHandler, ReactEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Information from "./components/Information";
import styles from "./page.module.css";
import image1 from "./images/frontpg/image4.jpg";
import image2 from "./images/frontpg/image3.jpg";
import image3 from "./images/frontpg/image2.jpg";


const Home = () => {


  return (
    <>
      {/* INTRO BIO SECTION  */}    
      <div className={styles['bio-div']}>
        <h1 className="">howdy, i'm marvin</h1>
        <p>I'm a full-stack developer focused on creating solutions and quality of life improvements.</p>
        <p>- avid enjoyor of nature -</p>
        <p>- aspiring retiree programmer & future homesteader -</p>
        <p>- navigating the never ending changes of the technological world -</p>
      </div>
    <section className={styles.content}>
      {/* <Information /> */}
      <div className={styles['photo-section']}>

        <div className={`${styles['photo-container']} ${styles['item-a']} `}>
          <Image 
          className={`${styles['frontpg-img']}`}
          src={image1}
          alt="noAlt"
          >
          </Image>
        </div>

        <div className={`${styles['photo-container']} ${styles['item-b']} `}>
          <Image 
          className={styles['frontpg-img']}
          src={image2}
          alt="noAlt"
          >
          </Image>
        </div>

        <div className={`${styles['photo-container']} ${styles['item-c']} `}>
          <Image
            className={styles['frontpg-img']}
            src={image1}
            alt="noAlt"
          >
          </Image>
        </div>

        <div className={`${styles['photo-container']} ${styles['item-d']} `}>
          <Image 
          className={styles['frontpg-img']}
          src={image2}
          alt="noAlt"
          >
          </Image>
        </div>

        <div className={`${styles['photo-container']} ${styles['item-e']} `}>
          <Image 
          className={styles['frontpg-img']}
          src={image2}
          alt="noAlt"
          >
          </Image>
        </div>

        <div className={`${styles['photo-container']} ${styles['item-f']} `}>
          <Image 
          className={styles['frontpg-img']}
          src={image1}
          alt="noAlt"
          >
          </Image>
        </div>
        
      </div>
    </section>
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