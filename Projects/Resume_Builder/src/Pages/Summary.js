import React from "react";
import { Link } from "react-router-dom";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/summary.module.css";

export default function Summary() {
  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Summary</h4>
        <p>
          Briefly describe the value that you bring through your skills,
          background and experience.
        </p>
        <textarea className={Styles.textArea}></textarea>

        {/**************  Page Slider  ***********/}
        <div className={BaseStyles.pageSlider}>
          <Link to="/finalize-page">
            <button className={BaseStyles.submitBtn}>SAVE & CONTINUE</button>
          </Link>

          <div className={BaseStyles.back}>
            <Link to="/skills">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
