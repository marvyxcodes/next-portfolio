"use client";
import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import uniqid from "uniqid";
import Link from 'next/link';



const page = () => {


  // I could arrange 4-5 images manually in sub-arrays?
  // Revised, the helper function is doing this
  const imageFileNames = [
    "IMG_1.jpg",
    "IMG_2.jpg",
    "IMG_3.jpg",
    "IMG_4.jpg",
    "IMG_5.jpg",
    "IMG_6.jpg",
    "IMG_7.jpg",
    "IMG_8.jpg",
    "IMG_9.jpg",
    "IMG_10.jpg",
    "IMG_11.jpg",
    "IMG_12.jpg",
    "IMG_13.jpg",
    "IMG_14.jpg",
    "IMG_15.jpg",
    "IMG_16.jpg",
    "IMG_17.jpg",
    "IMG_18.jpg",
    "IMG_19.jpg",
    "IMG_20.jpg",
    "IMG_21.jpg",
    "IMG_22.jpg",
    "IMG_23.jpg",
    "IMG_24.jpg",
    "IMG_25.jpg",
    "IMG_26.jpg",
    "IMG_27.jpg",
    "IMG_28.jpg",
    "IMG_29.jpg",
    "IMG_30.jpg",
    "IMG_31.jpg",
    "IMG_32.jpg",
    "IMG_33.jpg",
    "IMG_34.jpg",
    "IMG_35.jpg",
    "IMG_36.jpg",
    "IMG_37.jpg",
    "IMG_38.jpg",
    "IMG_39.jpg",
    "IMG_40.jpg",
    "IMG_41.jpg",
    "IMG_42.jpg",
    "IMG_43.jpg",
    "IMG_44.jpg",
    "IMG_45.jpg",

  ]; 

  // TEST ARRAY FOR IMAGES DUE TO SLOW LOAD //
  // const imageFileNames = [
  //   "IMG_1.jpg",
  //   "IMG_2.jpg",
  //   "IMG_3.jpg",
  //   "IMG_4.jpg",
  //   "IMG_5.jpg",
  //   "IMG_6.jpg",
  //   "IMG_7.jpg",
  //   "IMG_8.jpg",
  //   "IMG_9.jpg",
  //   "IMG_10.jpg",
  //   "IMG_11.jpg",
  // ];


  function chunkArray(array: string[], chunkSize: number) {
    const result = [];
    for(let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  const chunks = chunkArray(imageFileNames, 5);

  const gallery = chunks.map((item) => {
    return (
    <div key={uniqid()} className={`${styles["column"]}`}>
      {item.map((filename:string) => {
        return <Link href={`/photo_gallery/${filename}`}><Image 
        width={0}
        height={0}
        style={{ width:"100%", height: "auto"}}
        className={styles.photo} 
        key={filename} 
        src={`/photo_gallery/${filename}`} 
        alt={"test"}
          unoptimized={true} /></Link>

      })}
    </div>
    )
  })

  // For every 4-5 images, I want to create a new 'column' div, containing those 4-5 images, then move onto the next 4-5, until whole array is iterated.

  return (
    <section className={styles["photo-sec"]}>
      <div className={styles["photo-grid"]}>
        {gallery}
      </div>
    </section>
  )
}

export default page


{/* <section>
      <div className={styles["photo-grid"]}>
        <div className={styles["column"]}>
          <Image src={image1} alt=""/>
          <Image src={image2} alt=""/>
          <Image src={image3} alt=""/>
          <Image src={image4} alt=""/>
          <Image src={image13} alt=""/>
          <Image src={image14} alt=""/>
        </div>
        <div className={styles["column"]}>
          <Image src={image5} alt=""/>
          <Image src={image6} alt=""/>
          <Image src={image7} alt=""/>
          <Image src={image8} alt=""/>
          <Image src={image15} alt=""/>
          <Image src={image16} alt=""/>
        </div>
        <div className={styles["column"]}>
          <Image src={image9} alt=""/>
          <Image src={image10} alt=""/>
          <Image src={image11} alt=""/>
          <Image src={image12} alt=""/>
        </div>
        <div className={styles["column"]}>
          
          
        </div>
      </div>
    </section> */}