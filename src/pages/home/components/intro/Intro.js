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
              DSA specialists, comprises over 400+ comprehensive questions that covers
              all the indepth topics of Data Structures and Algorithms. From very basics
              concepts to advanced problem-solving techniques, our sheet offers
              invaluable insights to navigate coding interviews
              With resource of coding platforms to solve those problems .
              There are lot more options of adding notes , bookmarking them , writing your own article that enhances the utmost best experience for user .
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
