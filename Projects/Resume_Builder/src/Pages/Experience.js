import React from "react";
import { Link } from "react-router-dom";

import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/experience.module.css";

export default function Experience() {
  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Work Experience</h4>
        <p>Start with your most recent position</p>
        <div className={Styles.title}>
          <div className={Styles.titleName}>Job Title</div>
          <input className={Styles.inputBox} type="text" />
        </div>
        <div className={Styles.title}>
          <div className={Styles.titleName}>Company</div>
          <input className={Styles.inputBox} type="text" />
        </div>
        <div className={Styles.title}>
          <div className={Styles.titleName}>City/Town</div>
          <input className={Styles.inputBox} type="text" />
        </div>
        <div className={Styles.title}>
          <div className={Styles.titleName}>Country</div>
          <input className={Styles.inputBox} type="text" />
        </div>

        <div className={Styles.titleName}>Start Date</div>
        <div className={Styles.dateContainer}>
          <div className={Styles.month}>
            <input
              list="months"
              name="month"
              className={Styles.smalltext}
              placeholder="month"
            />
            <datalist id="months">
              <option value="month" />
              <option value="January" />
              <option value="February" />
              <option value="March" />
              <option value="April" />
              <option value="May" />
              <option value="June" />
              <option value="July" />
              <option value="August" />
              <option value="September" />
              <option value="October" />
              <option value="November" />
              <option value="December" />
            </datalist>
          </div>
          <div className={Styles.year}>
            <input
              list="years"
              name="year"
              className={Styles.smalltext}
              placeholder="year"
            />
            <datalist id="years">
              <option value="year" />
              <option value="2022" />
              <option value="2021" />
              <option value="2020" />
              <option value="2019" />
              <option value="2018" />
              <option value="2017" />
              <option value="2016" />
              <option value="2015" />
              <option value="2014" />
              <option value="2013" />
              <option value="2012" />
              <option value="2011" />
            </datalist>
          </div>
        </div>

        <div className={Styles.checkBox}>
          <input type="checkbox" id="checkWork" />
          <label for="checkWork" className={Styles.titleName}>
            Currenty Work Here
          </label>
        </div>

        <div className={BaseStyles.pageSlider}>
          <Link to="/education">
            <button className={BaseStyles.submitBtn}>ENTER JOB DESCRIPTION</button>
          </Link>

          <div className={BaseStyles.back}>
            <Link to="/contact">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
