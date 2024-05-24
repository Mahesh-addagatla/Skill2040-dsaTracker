import React from "react";
import "./Intro.css";
import photo1 from "./Programmer.gif";
import photo2 from "./about1.jpg";
import code from "./coding.png";
import Strip from "./Strip";

const Intro = () => {
  return (
    <div className="intro">    <div className="hero-section">
      <div className="hero-content">
        <div className="dsa-photo-1">
          <img src={photo1} alt="programming"></img>
          <br />

        </div>
        <div className="dsa-content">
          <div className="dsa-description">
            <h2>Our DSA Sheet             <img
              src={code}
              alt="code"
              style={{ marginLeft: "2rem", height: "3rem", width: "4rem" }}
            /></h2>

            <p>
              This meticulously curated DSA sheet, crafted by our team of
              specialists, comprises over 320 comprehensive questions spanning
              the breadth of Data Structures and Algorithms. From foundational
              concepts to advanced problem-solving techniques, our sheet offers
              invaluable insights to navigate coding interviews with confidence.
              With its relevance to recent interview trends and emphasis on
              clear explanations, it's not just a study aid, but your
              indispensable companion on the journey to mastering DSA and
              securing coveted positions in the tech industry.
            </p>
          </div>
        </div>
        <div className="dsa-photo-2">

          <img src={photo2} alt="communication" style={{ position: "relative", zIndex: "-1" }}></img>
        </div>
      </div>
    </div >
    </div>

  );
};

export default Intro;
