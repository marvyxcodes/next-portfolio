import React from "react";
import portrait from "../images/port-pic.jpg";
import linkedIn from "../images/linked-in.svg";
import budgetyIco from "../images/budgetyIco.png";
import phoThanhIco from "../images/phoThanhIco.png";
import weebMaxIco from "../images/weebMax.png";

const Bio = () => {
  const skills = {
    languages: ["Javascript", "TypeScript"],
    frameworks: ["React.js / Redux", "Next.js", "Express.js"],
    other: [
      "HTML",
      "CSS",
      "EJS",
      "Mongoose",
      "Bootstrap",
      "Node.js",
      "Tailwind UI",
    ],
    databases: ["Firebase", "mySQL", "MongoDB"],
  };

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
        <img className="proj-ico" alt={project.imgAlt} src={project.picSrc} />
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
    <>
      {/* INTRO BIO SECTION  */}
      <section id="top" className="bio d-flex flex-column align-items-center">
        <article className="about-me d-flex flex-column flex-lg-row justify-content-center align-items-center w-100 pb-5 pt-3">
          {/* <img
            alt="Self Portrait"
            className="self-portrait rounded"
            src={portrait}
          ></img> */}
          <div className="d-flex flex-column justify-content-center pt-3 p-sm-5 text-center">
            <h1 className="title-font">Limitless</h1>
            <p>
              Being a web developer is more than just a great feat. It's a testament
              to the discipline and adaptability of an individual to be able to keep up with the ever changing landscape that is the internet and technolog.
            </p>
            <p>
              The possibilities are endless and the only limit is the
              imagination.
            </p>
            <div>
              <a
                href="https://www.linkedin.com/in/marvin-trujillo-b18b84132/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn Social" />
              </a>
            </div>
          </div>
        </article>
      </section>
      <section className="about-blurb mb-5">
        <h2 className="section-title">About Me</h2>
        <article className="px-1">
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
      </section>
      {/* PROJECTS SECTION */}
      {/* ================ */}
      <section className="proj-section">
        <h2 className="section-title">Projects</h2>
        <div className="proj-list d-flex flex-wrap flex-xl-nowrap">
          {projectElements}
        </div>
      </section>
      {/* SKILLS SECTION */}
      <div className="d-flex justify-content-end">
        <div className="top-link">
          <a href="#top" className="chevron text-decoration-underline">
            &#8593;
          </a>
        </div>
      </div>
    </>
  );
};

export default Bio;
