import React from "react";
import { Link } from "react-router-dom";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/skills.module.css";

export default function Skills() {
  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Skills</h4>
        <p>Add a few skills to show employers what you're good at.</p>

        <div className={Styles.rowContainer}>
          <div className={Styles.hash}>#</div>
          <div className={Styles.inputContainer}>
            <input
              className={Styles.inputBoxSkill}
              type="text"
              placeholder="Skill1"
            />
            <i class="material-icons">delete</i>
          </div>
        </div>
        <div className={Styles.rowContainer}>
          <div className={Styles.hash}>#</div>
          <div className={Styles.inputContainer}>
            <input
              className={Styles.inputBoxSkill}
              type="text"
              placeholder="Skill2"
            />
            <i class="material-icons">delete</i>
          </div>
        </div>
        <div className={Styles.rowContainer}>
          <div className={Styles.hash}>#</div>
          <div className={Styles.inputContainer}>
            <input
              className={Styles.inputBoxSkill}
              type="text"
              placeholder="Skill3"
            />
            <i class="material-icons">delete</i>
          </div>
        </div>
        <div className={Styles.rowContainer}>
          <div className={Styles.hash}>#</div>
          <div className={Styles.inputContainer}>
            <input
              className={Styles.inputBoxSkill}
              type="text"
              placeholder="Skill4"
            />
            <i class="material-icons">delete</i>
          </div>
        </div>

        <div className={BaseStyles.pageSlider}>
          <Link to="/summary">
            <button className={BaseStyles.submitBtn}>SAVE & CONTINUE</button>
          </Link>

          <div className={BaseStyles.back}>
            <Link to="/education">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
