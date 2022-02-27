import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/login.module.css";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Provider } from "react-redux";

export default function Login() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleClickWithEP() {
    setLoading(true);
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      setLoading(false);
      alert("Login successful");
      navigate("/");
    } catch (error) {
      setLoading(false);
      alert("Login Unsuccessful");
      console.log(error.message);
    }
  }
  async function handleClickWithGoogle() {
      setLoading(true);
      try{
        let result = await signInWithPopup(auth, Provider);
        const credential =  GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("User: ",user);
        setLoading(false);
        navigate("/");
      }catch(error){
        console.log(error)
        setLoading(false);
      }
  }

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className={styles.formcard}>
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
            <div className="form-buttons">
              <button
                className="btn hvr-float-shadow"
                type="button"
                onClick={handleClickWithEP}
              >
                Login
              </button>
              <button
                className="btn hvr-float-shadow"
                style={{ backgroundColor: "skyblue" }}
                type="button"
                onClick={handleClickWithGoogle}
              >
                Login With Google
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
