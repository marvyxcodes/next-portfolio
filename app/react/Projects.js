import React from "react";

const Projects = () => {
  const budgety = (
    <>
      <h3>Budgety</h3>
      <p>
        Budgety is a budgeting website tool which encompasses a variety of
        cashflow categories to help create monthly budgets and integrates
        individual user account authentications. Built on React frontend, and
        Firebase BaaS, but will move towards a MongoDB and Express backend in
        the future.
      </p>
      <a href="https://budgety-5809a.web.app/">Demo</a>
      <a href="https://github.com/enticingcode/budgety">Repo</a>
    </>
  );

  const phoThanh = (
    <>
      <h3>Pho Thanh II</h3>
      <p>
        Pho Thanh II is a static website created for a real local restaurant.
      </p>
      <a target="_blank" href="https://pho-thanh-ii.web.app/" rel="noreferrer">
        Demo
      </a>
      <a
        target="_blank"
        href="https://github.com/enticingcode/pho-thanh-page"
        rel="noreferrer"
      >
        Repo
      </a>
    </>
  );
  const iForecast = (
    <>
      <h3>iForecast</h3>
      <p>
        iForecast uses Openweather's API to get the most recent weather data
        available by zip code.
      </p>
      <a
        target="_blank"
        href="https://iforecast-fdeed.web.app//"
        rel="noreferrer"
      >
        Demo
      </a>
      <a
        target="_blank"
        href="https://github.com/enticingcode/weatherApp"
        rel="noreferrer"
      >
        Repo
      </a>
    </>
  );

  const noteApp = (
    <>
      <h3>Note.ly</h3>
      <p>
        Note.ly implements a basic scratchpad note taking application using
        Firebase as a backend.
      </p>
      <a
        target="_blank"
        href="https://note-ify-be488.web.app/"
        rel="noreferrer"
      >
        Demo
      </a>
      <a
        target="_blank"
        href="https://github.com/enticingcode/React-Note-ify-app"
        rel="noreferrer"
      >
        Repo
      </a>
    </>
  );
  const weebMax = (
    <>
      <h3>Weeb Max Store</h3>
      <p>
        Full Stack e-commerce application implementing Next.js, MongoDB, Stripe
        Checkout backend with API and authentication functionalities.
      </p>
      <a target="_blank" href="https://weeb-max.vercel.app/" rel="noreferrer">
        Demo
      </a>
      <a
        target="_blank"
        href="https://github.com/enticingcode/weebMax"
        rel="noreferrer"
      >
        Repo
      </a>
    </>
  );

  const [activeProject, setActiveProject] = React.useState(budgety);

  function showProject(e) {
    switch (e.target.id) {
      case "budgety":
        setActiveProject(budgety);
        break;
      case "phoThanh":
        setActiveProject(phoThanh);
        break;
      // case "iForecast":
      //   setActiveProject(iForecast);
      //   break;
      // case "noteApp":
      //   setActiveProject(noteApp);
      //   break;
      case "weebMax":
        setActiveProject(weebMax);
        break;
      default:
        break;
    }
  }

  return (
    // TECH STACKS DISPLAY
    <section id="projects" className="projects-section">
      <h2 className="root-section">/Portfolio</h2>
      <div className="proj-list d-flex justify-content-center mt-5 flex-wrap">
        <span className="proj-span" id="budgety" onClick={showProject}>
          Budgety
        </span>
        <span className="proj-span" id="phoThanh" onClick={showProject}>
          Pho Thanh II
        </span>
        {/* <span className="proj-span" id="iForecast" onClick={showProject}>
          iForecast
        </span> */}
        {/* <span className="proj-span" id="noteApp" onClick={showProject}>
          Note.ly
        </span> */}
        <span className="proj-span" id="weebMax" onClick={showProject}>
          WeebMax
        </span>
      </div>
      <div className="pj-info mt-5 py-2 text-center">{activeProject}</div>
    </section>
  );
};

export default Projects;
