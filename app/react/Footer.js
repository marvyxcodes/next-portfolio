import React from "react";

function Footer() {
  return (
    <>
      <hr></hr>
      <footer className="site-footer d-flex">
        <div className="container-fluid d-flex align-items-center justify-content-center flex-column">
          <div className="d-flex justify-content-between w-50">
            <div>
              <a href="mailto:trujillomarvin@hotmail.com">Email Me</a>
            </div>
            <div className="socials">
              <ul className="social-icons">
                <li>
                  <a
                    className="social-link"
                    target="_blank"
                    href="https://www.linkedin.com/in/marvin-trujillo-b18b84132/"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy-right-div">
            <p>
              Copyright &copy; 2022 Developed by
              <a href="#top"> Marvin Trujillo</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
