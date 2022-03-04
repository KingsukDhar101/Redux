import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../Actions/action";
import Styles from "../Styles/signup.module.css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase_config";

export default function Signup() {
  const dispatch = useDispatch();
  const { userReducer } = useSelector((state) => state);

  const auth = getAuth();
  const [name, setName] = useState(userReducer.name);
  const [email, setEmail] = useState(userReducer.email);
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
 
  const navigate = useNavigate();

  async function handleClick() {
    setLoading(true);
    try {
      let userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log("User @ Signup : ", userData.user.uid);
      setUid(userData.user.uid);
      userData.user.displayName = name;
      setLoading(false);
      // console.log("Name: ", name);

      
      let docRef = await doc(db, "users",userData.user.uid);

      let userDetails = {
        "userData": {
          name,
          email,
          uid: userData.user.uid,
        },
      };
      // console.log("UserDetails: ",userDetails)
      let user1 = await setDoc(docRef, userDetails);
      // console.log("User1: ", user1);
      alert("Signup successfull");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      alert(error.message);
      console.log(error.message);
    }
  }

  useEffect(()=>{
      dispatch(userAction({ name, email, uid }));
  },[name, email, uid]);

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className={Styles.formcard}>
          <h2 className="form-heading center">Enter Login details</h2>
          <div className="form-section">
            <div className="input-group full">
              <label>Name</label>
              <div className="effect">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
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
                Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
