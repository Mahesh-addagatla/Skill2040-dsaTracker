// Footer.js
import React from "react";
import "./Footer.css";
import logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg
          id="svg"
          viewBox="0 0 1440 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,500 L 0,187 C 114.31578947368419,143.21052631578948 228.63157894736838,99.42105263157896 332,111 C 435.3684210526316,122.57894736842104 527.7894736842106,189.52631578947367 607,197 C 686.2105263157894,204.47368421052633 752.2105263157894,152.47368421052633 842,149 C 931.7894736842106,145.52631578947367 1045.3684210526317,190.57894736842107 1149,205 C 1252.6315789473683,219.42105263157893 1346.3157894736842,203.21052631578948 1440,187 L 1440,500 L 0,500 Z"
            stroke="none"
            stroke-width="0"
            fill="#61d8ad"
            fill-opacity="1"
          ></path>
        </svg>
      </div>
      <div className="footer-wave-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#61D8AD"
            fill-opacity="0.2"
            d="M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="footer-wave-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#61D8AD"
            fill-opacity="0.2"
            d="M0,224L80,213.3C160,203,320,181,480,170.7C640,160,800,160,960,138.7C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="header-footer">
          <img src={logo} alt="logo" />
          <h1>SKILL-2040</h1>
        </div>
        <div className="about">
          <h2>About</h2>
          <ul>
            <li>About SKILL - 2040</li>
            <li>Team</li>
            <li>Privacy & Terms</li>
            <li>Advertise on SKILL - 2040</li>
            <li>Work With Us</li>
          </ul>
        </div>
        <div className="support">
          <h2>Get Support</h2>
          <ul>
            <li>Contact our Team</li>
            <li>Support Policy</li>
            <li>Refund Policy</li>
            <li>FAQ</li>
            <li>Need assistance?</li>
          </ul>
        </div>
        <div className="community">
          <h2>Our Community</h2>
          <ul>
            <li>Follow us on Facebook</li>
            <li>Follow us on Instagram</li>
            <li>Join our Discord</li>
            <li>Follow us on Twitter</li>
            <li>Follow us on YouTube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
