import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/finalizePage.module.css";

export default function FinalizePage() {
  const FinalizeState = useSelector((state) => state);
  // console.log("Final Data: ", FinalizeState);
  const {
    contactReducer,
    experienceReducer,
    educationReducer,
    summaryReducer,
    skillReducer,
  } = FinalizeState;
  console.log("Contact Data: " + contactReducer);
  const cd = contactReducer;
  const ex = experienceReducer;
  const edu = educationReducer;
  const summary = summaryReducer;
  const sk = skillReducer;

  const newSk = sk.filter((item) => item.skill != "");

  // console.log("Skill Array: ", newSk);

  return (
    <div className={Styles.finalizeContainer}>
      <div className={Styles.leftContainer}>
        <div className={Styles.headingContainer}>
          <div className={Styles.topContainer}>
            <div className={Styles.nameLogo}>KD</div>
            <div className={Styles.name}>{cd.name}</div>
          </div>
          <div className={Styles.contactContainer}>
            <div className={Styles.smallText}>
              {cd.phoneno} | {cd.email}
            </div>
            <div className={Styles.smallText}>
              {cd.address} | {cd.city}, {cd.country}
            </div>
          </div>
        </div>
        <div className={Styles.experienceContainer}>
          <div className={Styles.midHeading_left}>EXPERIENCE</div>
          <div className={Styles.exContentContainer}>
            <div className={Styles.left}>
              <div className={Styles.smallText} style={{ marginBottom: "5px" }}>
                {ex.jobtitle}
              </div>
              <div className={Styles.smallText}>
                <span>
                  {ex.company} | {ex.city}, {ex.country}
                </span>
              </div>
            </div>
            <div className={Styles.right}>
              <div className={Styles.smallText}>
                <div style={{ float: "right", marginBottom: "5px" }}>
                  {ex.startmonth}-{ex.startyear}
                </div>
                <div>
                  {ex.endmonth}-{ex.endyear}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.skillContainer}>
          <div className={Styles.midHeading_left}>SKILLS</div>
          <div className={Styles.skills}>
            {newSk.length > 0 ? 
              newSk.map(skillItem => (
                <div key={skillItem.id} className={Styles.skill}>
                  {skillItem.skill}
                </div>))
             : ""}
          </div>
        </div>

        {/* Education container */}
        <div className={Styles.experienceContainer}>
          <div className={Styles.midHeading_left}>EDUCATION</div>
          <div className={Styles.exContentContainer}>
            <div className={Styles.left}>
              <div className={Styles.smallText} style={{ marginBottom: "5px" }}>
                {edu.degree}
              </div>
              <div className={Styles.smallText}>
                <span>
                  {edu.school} | {edu.city}, {edu.country}
                </span>
              </div>
            </div>
            <div className={Styles.right}>
              <div className={Styles.smallText}>
                <span style={{ marginBottom: "5px" }}>
                  {edu.gradmonth} {edu.gradyear}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.summaryContainer}>
          <div className={Styles.midHeading_left}>PROFESSIONAL SUMMARY</div>
          <div className={Styles.smallText} style={{ marginTop: "10px" }}>
            {summary}
          </div>
        </div>

        <div className={Styles.pageSlider}>
          <div className={Styles.back}>
            <Link to="/summary">Back</Link>
          </div>
        </div>
      </div>
      <div className={Styles.rightContainer}>
        <div className={Styles.contentContainer}>
          <h4>Here's Your Resume!</h4>
          <p>What do you want to do next?</p>
          <div className={Styles.midHeading}>Export Options</div>
          <button className={Styles.download}>Download</button>
          <button className={Styles.print}>Print</button>
          <button className={Styles.email}>Email</button>
          <div className={Styles.underline}></div>
          <div className={Styles.midHeading}>Formatting Options</div>
          <div className={Styles.layoutContainer}>
            <div className={Styles.smallHeading}>layout</div>
            <div className={Styles.layoutContainerBtn}>
              <button className={Styles.condensed}>CONDENSED</button>
              <button className={Styles.standard}>STANDARD</button>
              <button className={Styles.expanded}>EXPANDED</button>
            </div>
          </div>
          <div className={Styles.fontContainer}>
            <div className={Styles.fontStyleContainer}>
              <div className={Styles.smallHeading}>Font Style</div>
              <button>button</button>
            </div>
            <div className={Styles.fontSizeContainer}>
              <div className={Styles.smallHeading}>Font Size</div>
              <button>button</button>
            </div>
          </div>
          <div className={Styles.colorContainer}>
            <div className={Styles.smallHeading}>Colors</div>
            <div className={Styles.colorBtns}>
              <button className={Styles.blackbtn}></button>
              <button className={Styles.violetbtn}></button>
              <button className={Styles.bluebtn}></button>
              <button className={Styles.skybluebtn}></button>
              <button className={Styles.pinkbtn}></button>
              <button className={Styles.graybtn}></button>
              <button className={Styles.orangebtn}></button>
              <button className={Styles.greenbtn}></button>
              <button className={Styles.darkbluebtn}></button>
            </div>
          </div>
          <div className={Styles.underline}></div>
          <button>Add new Section</button>
          <button>Change Template</button>
        </div>
      </div>
    </div>
  );
}
