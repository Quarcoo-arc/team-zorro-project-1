import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <p>Nigeria</p>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="center">
          <img src="/images/carbon.png" alt="carbon icon" /> Carbon neutral
          since 2007
        </p>
        <ul className="left">
          <li>About</li>
          <li>Advertising</li>
          <li>Business</li>
          <li>How Search Works</li>
        </ul>
        <ul className="right">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
