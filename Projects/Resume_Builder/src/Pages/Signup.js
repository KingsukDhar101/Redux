import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import Styles from "../Styles/signup.module.css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleClick() {
      setLoading(true);
      try{
        let user = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User : ",user);
        setLoading(false);
        alert("Signup successfull");
        navigate("/login");
      }catch(error){
        setLoading(false);
        alert("Signup successfull");
        console.log(error.message);
      }
  }
  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className={Styles.formcard}>
          <h2 className="form-heading center">Enter Login details</h2>
          <div className="form-section">
            <div className="input-group full">
              <label>Email</label>
              <div className="effect">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="input-group full">
              <label>Password</label>
              <div className="effect">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-buttons" onClick={handleClick}>
              <button className="btn hvr-float-shadow" type="button">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
