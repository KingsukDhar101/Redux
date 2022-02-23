import React from "react";
import { Link } from "react-router-dom";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/home.module.css";

function Home() {
  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        {/********************* page slider part******************************/}
        <div className={BaseStyles.pageSlider}>
          <Link to="/contact">
            <button className={BaseStyles.submitBtn}>Start your project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
