import React, { useEffect, useState } from "react";
import Styles from "../Styles/Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { finalizeAction } from "../Actions/action";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { finalizeReducer } = useSelector((state) => state);
  const [finaldata, setFinaldata] = useState(finalizeReducer);

  // console.log("Data @ sidebar : ", finalizeReducer);
  // let sbopen = finalizeReducer.sidebar;

  function handleClickSidebar(e) {
    let { name } = e.target;
    setFinaldata({
      ...finaldata,
      [name]: false,
    });
    // console.log("Cross click: ",finaldata);
  }
  useEffect(() => {
    dispatch(finalizeAction(finaldata));
  }, [finaldata]);

  return (
    <div className={Styles.sidebar_container}>
      <button
        name="sidebar"
        className={Styles.cross}
        onClick={(e) => {
          handleClickSidebar(e);
        }}
      >
        X
      </button>
      <div className={Styles.box}>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
}
