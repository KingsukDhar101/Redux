import React from "react";
import { Link } from "react-router-dom";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/finalizePage.module.css";

export default function FinalizePage() {
  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Finalize Page</h4>
        <div className={BaseStyles.pageSlider}>
          <button className={BaseStyles.submitBtn}>Submit</button>

          <div className={BaseStyles.back}>
            <Link to="/summary">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
