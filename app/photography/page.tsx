import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';

import image1 from "../images/photo_gallery/1.jpg";
import image2 from "../images/photo_gallery/2.jpg";
import image3 from "../images/photo_gallery/3.jpg";
import image4 from "../images/photo_gallery/4.jpg";
import image5 from "../images/photo_gallery/5.jpg";
import image6 from "../images/photo_gallery/6.jpg";
import image7 from "../images/photo_gallery/7.jpg";
import image8 from "../images/photo_gallery/8.jpg";
import image9 from "../images/photo_gallery/9.jpg";
import image10 from "../images/photo_gallery/10.jpg";
import image11 from "../images/photo_gallery/11.jpg";
import image12 from "../images/photo_gallery/12.jpg";
import image13 from "../images/photo_gallery/13.jpg";
import image14 from "../images/photo_gallery/14.jpg";
import image15 from "../images/photo_gallery/15.jpg";
import image16 from "../images/photo_gallery/20160320-IMG_0336.jpg";
// import image17 from "../images/photo_gallery/20160320-IMG_0404.jpg";
// import image18 from "../images/photo_gallery/20161012-IMG_3894.jpg";
// import image19 from "../images/photo_gallery/20161012-IMG_3894.jpg";
// import image20 from "../images/photo_gallery/20161012-IMG_3894.jpg";
// import image21 from "../images/photo_gallery/20161012-IMG_3894.jpg";
// import image22 from "../images/photo_gallery/20161012-IMG_3894.jpg";



const page = () => {


  // I could arrange 4-5 images manually in sub-arrays?
  const imageFileNames = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
  ];


  // For every 4-5 images, I want to create a new 'column' div, containing those 4-5 images, then move onto the next 4-5, until whole array is iterated.

  for(let i = 0; i < imageFileNames.length; i += 4) {
    console.log(imageFileNames[i]);
    const div = document.createElement("div");

    for(let j = i; j < i + 4 && j < imageFileNames.length; j++){
      return(<Image src={`/photo_gallery/${imageFileNames[j]}`} alt="tak" />)
    }
  }

  const gallery = imageFileNames.map((item) => {
    //for every filename, create a Image file for it.
    return (
      <div key={item} className={`${item} ${styles["column"]}`}>
        <Image fill className={styles.photo} src={`/photo_gallery/${item}`} alt={"tak"} />
        </div>
    )
  }
  );

  // const test2 = imageFileNames.map((item) => {
  //   return <div>{item}</div>
  // });

  return (
    <section>
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