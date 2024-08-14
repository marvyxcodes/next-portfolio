import React from 'react'
import budgetyIco from "@/app/images/budgetyIco.png";
import phoThanhIco from "@/app/images/phoThanhIco.png";
import weebMaxIco from "@/app/images/weebMax.png";
import Image from 'next/image';
import styles from "./Information.module.css";

type Props = {
}

const Information = (props: Props) => {


  let info = (
    <article className={styles["article"]}>
      <p>
        Avid enjoyer of all things nature. 
      </p>
      <p>
        Aspiring retiree programmer/homesteader.
      </p>
      
    </article>
  )

  let work = [
    { name: "Logical Position", title: "Junior Web Developer II", desc: "Implement content deliverables on various client websites using a variety of Content Management Systems(CMS) from Wordpress, Shopify, BigCommerce, to more custom options. Always exercising discretion and using best industry practices as well as QA.", start_date: "2023", end_date: "Present", tech_used: "" },

    { name: "Gates Corp", title: "Distribution Center Associate", desc: "Pick, package, and ship domestically and internationally as part of a team to fulfill customer orders in a timely manner meeting deadlines and quota numbers.", start_date: "2022", end_date: "2022", tech_used: "" },

    { name: "City of Rosemead", title: "Recreation Leader I", desc: "Tasked with leading various activities, programs, and city-wide events, utilizing expertise in leadership and team principles. This position involves maintaining open communication and fostering positive relationships with the public, participants, and staff. Additionally, responsible for enforcing safety protocols, responding to emergencies, and overseeing the maintenance of city facilities, equipment, and supplies to facilitate community engagement.", start_date: "2015", end_date: "2022", tech_used: "" },

    { name: "City of El Monte", title: "Office Assistant", desc: "Responsible for preparing routine office documents and communications, including correspondence, memoranda, reports, forms, and flyers. Additionally, served as the front office receptionist, greeting and receiving customers, partners, and other City staff in a courteous and professional manner. Furthermore, entered data into spreadsheets and databases using Microsoft Excel and Access, ensuring accurate and organized record-keeping.", start_date: "2019", end_date: "2021", tech_used: "" }
  ];

  let workElements = work.map((item => {
    return (
      <div key={item.title} className={styles["work-module"]}>
        <div className={styles["work-dates"]}>
          <p>{item.start_date + " — " + item.end_date}</p>
        </div>
        <div className={styles["work-descriptions"]}>
          <h3>{item.title}</h3>
          <h4>{item.name}</h4>
          <p>{item.desc}</p>
          <p>{item.tech_used}</p>
        </div>
      </div>
    )
  }));

  let projects = [
    {
      name: "Budgety",
      picSrc: budgetyIco,
      imgAlt: "Budget App",
      tech: ["React", "Bootstrap", "Firestore"],
      desc: "Cashflow budgeting application with integrated financial news API",
      href: "https://budgety-5809a.web.app/",
      repo: "https://github.com/enticingcode/budgety",
    },
    {
      name: "Pho Thanh II",
      picSrc: phoThanhIco,
      imgAlt: "Pho Thanh Restaurant",
      tech: ["React", "Firebase Hosted"],
      desc: "Landing page for real local restaurant",
      href: "https://pho-thanh-ii.web.app/",
      repo: "https://github.com/enticingcode/pho-thanh-page",
    },
    {
      name: "Weeb Max",
      picSrc: weebMaxIco,
      imgAlt: "Anime Merchandise Store",
      tech: ["Next.js", "MongoDB", "Typescript", "Stripe"],
      desc: "Full Stack E-Commerce Page for all things anime",
      href: "https://weeb-max.vercel.app",
      repo: "https://github.com/enticingcode/weebMax",
    },
  ];


  let projectElements = projects.map((project) => {
    return (
      <div key={project.name} className={styles["project-module"]}>
        <Image
          // className={styles.projectImage}
          alt={project.imgAlt}
          src={project.picSrc}
          width={175}
        />
       
        <div className="proj-info">
          <h1>{project.name}</h1>
          <p>{project.desc}</p>
        </div>
      </div>
    );
  });


  return (
    <>
      <section id="info" className={styles["info-section"]}>{info}</section>
      <section
        id="work"
        className={`${styles["info-section"]} ${styles["modules-section"]}`}>{workElements}
      </section>
      <section
        id="projects"
        className={`${styles["info-section"]} ${styles["modules-section"]}`}>{projectElements}
      </section>
    </>
  )
}

export default Information




// <ul className="t-stacks">
// {project.tech.map((item) => {
//   return <li key={item}>{item}</li>;
// })}
// </ul>








{/* <h2 className="section-title">Projects</h2>
<div className="proj-list d-flex flex-wrap flex-xl-nowrap">
  {projectElements}
</div> */}