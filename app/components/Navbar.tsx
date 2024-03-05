import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import enticingVisions from "@/app/images/enticingVisions.png";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [currentNavigation, setCurrentNavigation] = useState("#info");
  const router = useRouter();
 
  function handleNavigation(e) {
    e.preventDefault();
    const target = e.target.hash;
    setCurrentNavigation(target);
  }

  function handleActive(e) {
    console.log(e.currentTarget);
    e.stopPropagation();
    e.preventDefault();
    if (e.currentTarget.localName === "li") {
    const target = e.currentTarget.firstChild.hash;
    setCurrentNavigation(target);
    router.push(`/${target}`);
    }
  }

  function handleNavHover(e) {

  }

  return (
    <nav className={styles["nav"]}>
          <ul  className={styles['nav-list']}>
            <li onClick={handleActive}>
              <a href="#info" className={currentNavigation === "#info" ? styles["active"] : ""}>
              <span className={styles["nav-indicator"]}></span>
              <span>Info</span>
              </a>
            </li>
            <li onClick={handleActive}>
              <a href="#work" className={currentNavigation === "#work" ? styles["active"] : ""}>
              <span className={styles["nav-indicator"]}></span>
              <span>Work</span></a>
            </li>
            <li onClick={handleActive}>
              <a href="#projects" className={currentNavigation === "#projects" ? styles["active"] : ""}>
              <span className={styles["nav-indicator"]}></span>
              <span>Projects</span></a>
            </li>
          </ul>
        </nav>
  );
};

export default Navbar;


