import React from "react";
import linkedIn from "@/app/images/linked-in.svg";
import budgetyIco from "@/app/images/budgetyIco.png";
import phoThanhIco from "@/app/images/phoThanhIco.png";
import weebMaxIco from "@/app/images/weebMax.png";
import Image from "next/image";

import styles from "./page.module.css";

const Bio = () => {
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
            <div key={project.name} className="proj-node">
                <Image
                    className={styles.projectImage}
                    alt={project.imgAlt}
                    src={project.picSrc}
                    width={300} 
                    />
                <ul className="t-stacks">
                    {project.tech.map((item) => {
                        return <li key={item}>{item}</li>;
                    })}
                </ul>
                <div className="proj-info">
                    <h1>{project.name}</h1>
                    <p>{project.desc}</p>
                    <div className="proj-links">
                        <a target="_blank" href={project.href} rel="noreferrer">
                            Demo
                        </a>
                        <a target="_blank" href={project.repo} rel="noreferrer">
                            Repo
                        </a>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <main className={styles.home}>
            {/* INTRO BIO SECTION  */}
            <header id="top" className={styles.biocard}>
                <div className={styles['bio-div']}>
                    <h1 className="">Marvin Trujillo</h1>
                    <h2>Full Stack Developer</h2>
                    <p>I help develop technological solutions.</p>
                    {/* <a
                        href="https://www.linkedin.com/in/marvin-trujillo-b18b84132/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={linkedIn} alt="LinkedIn Social" />
                    </a> */}
                </div>
                <div>
                    <ul className={styles['nav-list']}>
                        <li>Info</li>
                        <li>Work</li>
                        <li>Projects</li>
                    </ul>
                </div>
            </header>

            {/* PROJECTS SECTION */}
            <section className={styles.content}>
                <article className="">
                    <p>
                        I am a self taught developer based in Arkansas, USA. I have learned
                        to develop responsive websites from the ground up along with a
                        general understanding of software engineering. My discipline and
                        persistence has led me to build projects for fun but also delve into
                        a career of Frontend Web Development. I'm excited to continuously
                        learn new developing technologies as well older tried and tested
                        ones.
                    </p>
                </article>
                <h2 className="section-title">Projects</h2>
                <div className="proj-list d-flex flex-wrap flex-xl-nowrap">
                    {projectElements}
                </div>
            </section>

        </main>
    );
};

export default Bio;


// {/* SKILLS SECTION */}
// <div className="d-flex justify-content-end">
// <div className="top-link">
//     <a href="#top" className="chevron text-decoration-underline">
//         &#8593;
//     </a>
// </div>
// </div>