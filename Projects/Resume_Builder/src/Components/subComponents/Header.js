import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/header.module.css";

export default function Header() {
  return (
    <div className={Styles.headerContainer}>
      <Link to="/">
        <div className={Styles.logo}>ResumeCreator</div>
      </Link>

      <div className={Styles.contents}>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <div className={Styles.hLink}>Resume Templates</div>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <div className={Styles.hLink}>About Us</div>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <div className={Styles.hLink}>Signup</div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className={Styles.hLink}>Login</div>
        </Link>
      </div>
    </div>
  );
}
