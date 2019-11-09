import React from "react";

import "./styles.css";

const Footer = () => (
  <section id="footer" className="footer">
    <span>
      &copy; {new Date().getFullYear()}
      <a href="http://helocreativo.com/" target={"_blank"}>
        {" "}
        Design by Helo Creativo.
      </a>
    </span>
    <span>
      <a href="https://www.linkedin.com/in/miguelcardenas03" target={"_blank"}>
        Powered by Upload
      </a>
    </span>
  </section>
);

export default Footer;
