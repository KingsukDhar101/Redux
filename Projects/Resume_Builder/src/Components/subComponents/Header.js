import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Styles from "../../Styles/header.module.css";

export default function Header() {
  const { userReducer } = useSelector((state) => state);
  // console.log("User data: ",userReducer);
  let { name, email } = userReducer;

  return (
    <div className={Styles.headerContainer}>
      <Link to="/">
        <div className={Styles.logo}>
          <h3>ResumeCreator</h3>
        </div>
      </Link>

      <div className={Styles.contents}>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <div className={Styles.hLink}>Resume Templates</div>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <div className={Styles.hLink}>About Us</div>
        </Link>

        {!name && !email ? (
          <>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <div className={Styles.hLink}>Signup</div>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className={Styles.hLink}>Login</div>
            </Link>
          </>
        ) : (
          <div className={`${Styles.hLink} ${Styles.username} `}>{name}</div>
        )}
      </div>
    </div>
  );
}
