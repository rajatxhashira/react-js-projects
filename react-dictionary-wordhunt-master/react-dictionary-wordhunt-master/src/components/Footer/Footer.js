import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <div className="iconContainer">
        <a href="https://www.linkedin.com/in/rajat58beer" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
