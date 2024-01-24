import React from "react";
import { NavLink } from "react-router-dom";
import enticingVisions from "../images/enticingVisions.png";

const Navbar = () => {
  const paths = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/portfolio",
      name: "Portfolio",
    },
    {
      path: "/about",
      name: "About",
    },

    {
      path: "/contact",
      name: "Contact",
    },
  ];

  let navLinks = paths.map((item) => {
    return (
      <NavLink key={item.path} className="nav-link m-2" to={item.path}>
        <div
          className="w-100"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          {item.name}
        </div>
      </NavLink>
    );
  });

  return (
    <nav className="navbar navbar-expand-md pt-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar top-bar"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">{navLinks}</div>
        </div>
        <NavLink to="/" className="navbar-brand">
          <img
            className="logo"
            alt="Enticing Visions Signature Logo"
            src={enticingVisions}
          ></img>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
