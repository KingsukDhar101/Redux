import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/startproject.module.css";
// import img1 from "."

function StartProject() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  function navigateToLogin() {
    navigate("/login");
  }

 
  
  return (
    <div className={Styles.container}>
      {user ? (
        <>
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
              <img src="/img1.png" alt="" />
            </div>
          </div>
        </>
      ) : (
        navigateToLogin()
      )}
    </div>
  );
}

export default StartProject;
