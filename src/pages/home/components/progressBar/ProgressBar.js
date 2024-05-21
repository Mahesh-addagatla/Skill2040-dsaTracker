import React from "react";
import Progress from "@ramonak/react-progress-bar";
import "./ProgressBar.css";
import useSound from 'use-sound';
import loud_btn from '../sounds/buttonClick.mp3';
const ProgressBar = () => {
  const [play] = useSound(loud_btn);
  return (
    <div className="progress-bar">
      <Progress
        completed={60}
        width="35vw"
        height="2.2vh"
        bgColor="#61D8AD"
      />
      <div class="container-showTag">
        <input type="checkbox" id="cbx2" style={{ display: "none" }}
          onChange={play} />
        <label for="cbx2" class="check">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
          <span style={{ fontSize: "1.3rem", fontWeight: "500", marginLeft: "0.6rem" }}> Show Tag</span>
        </label>
      </div>
    </div>
  );
};

export default ProgressBar;
