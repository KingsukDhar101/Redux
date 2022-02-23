import React from "react";
import { Link } from "react-router-dom";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/contactInfo.module.css";

export default function Education() {
  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Contact Info</h4>

        {/********************* page slider part******************************/}
        <div className={BaseStyles.pageSlider}>
          <Link to="/experience">
            <button className={BaseStyles.submitBtn}>
              ENTER JOB DESCRIPTION
            </button>
          </Link>

          <div className={BaseStyles.back}>
            <Link to="/">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
