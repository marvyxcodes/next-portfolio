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
    e.stopPropagation();
    e.preventDefault();
    if (e.target.localName === "a") {
    const target = e.target.hash;
    console.log(target);
    setCurrentNavigation(target);
    router.push(`/${target}`);
    }
  }


  return (
    <nav className={styles["nav"]}>
          <ul onClick={handleActive} className={styles['nav-list']}>
            <li>
              <a href="#info" className={currentNavigation === "#info" ? styles["active"] : ""}>
              <span className={styles["nav-indicator"]}></span>
              Info
              </a>
            </li>
            <li>
              <a href="#work" className={currentNavigation === "#work" ? styles["active"] : ""}>
              <span className={styles["nav-indicator"]}></span>
              Work</a>
            </li>
            <li>
              <a href="#projects" className={currentNavigation === "#projects" ? styles["active"] : ""}>
              <span className={styles["nav-indicator"]}></span>
              Projects</a>
            </li>
          </ul>
        </nav>
  );
};

export default Navbar;


