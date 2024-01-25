import React from 'react'
import budgetyIco from "@/app/images/budgetyIco.png";
import phoThanhIco from "@/app/images/phoThanhIco.png";
import weebMaxIco from "@/app/images/weebMax.png";
import linkedIn from "@/app/images/linked-in.svg";
import Navbar from './components/Navbar';

type Props = {}

const Home = (props: Props) => {

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
    <div className="main">
      <Navbar/>
        {/* INTRO BIO SECTION  */}
      <section id="top" className="">
        <article className="">
          {/* <img
            alt="Self Portrait"
            className="self-portrait rounded"
            src={portrait}
          ></img> */}
          <div className="">
            <h1 className="">Limitless</h1>
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
      <section className="">
        <h2 className="">About Me</h2>
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
      </section>
      {/* PROJECTS SECTION */}
      {/* ================ */}
      <section className="">
        <h2 className="">Projects</h2>
        <div className="">
          {projectElements}
        </div>
      </section>
      {/* SKILLS SECTION */}
      <div className="">
        <div className="">
          <a href="#top" className="">
            &#8593;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home

