import React from "react";
import { Link } from "react-router-dom";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/startproject.module.css";
// import img1 from "."

function StartProject() {
  return (
    <div className={Styles.container}>
      <div className={Styles.leftContainer}>
        {/********************* page slider part******************************/}
        <div className={Styles.pageSlider}>
          <Link to="/contact">
            <button className={Styles.submitBtn}>Start your project</button>
          </Link>
        </div>
      </div>
      <div className={Styles.rightContainer}>
        <div className={Styles.rightImgContainer}>
          <img src="/img1.png"  alt="" />
        </div>
      </div>
    </div>
  );
}

export default StartProject;
