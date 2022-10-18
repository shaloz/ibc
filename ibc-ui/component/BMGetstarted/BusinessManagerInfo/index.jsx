import React, { useEffect } from "react";
import GetStartedHeader from "./GetStartedHeader";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import SectionNine from "./SectionNine";
import { addClass, removeClass } from "../../../component/functions/landingPage";
import { useDispatch } from "react-redux";

const BusinessManager = ({ styles }) => {
  const dispatch = useDispatch();

  const menu = (
    <div>
      <div id="menuBar" className="menuBar">
        <div className={styles.menuContainerInner}>
          <p className={styles.getStartedHeader}>Fees</p>
        </div>
        <div className={styles.menuContainerInner}>
          <p className={styles.getStartedHeader}>Tools</p>
        </div>
        <div className={styles.menuContainerInner}>
          <p className={styles.getStartedHeader}>Support</p>
        </div>
        <div className={styles.menuContainerInner}>
          <p className={styles.getStartedHeader}>Stories</p>
        </div>
        <div className={styles.menuContainerInner}>
          <p className={styles.getStartedHeader}>Selling</p>
        </div>
        <div className={styles.menuContainerInner}>
          <p className={styles.getStartedHeader}>FAQ</p>
        </div>
        <div>
          <button className="bm-header-btn" id="bm-header-btn">
            Open your iBC Business
          </button>
        </div>
      </div>
    </div>
  );

  let menuOffSet = null;
  useEffect(() => {
    menuOffSet = document.getElementById("menuBar").offsetTop;
  }, []);

  const handleScroll = () => {
    const scroll = window.pageYOffset;
    console.log(scroll);
    console.log(menuOffSet);
    if (scroll >= menuOffSet) {
      addClass(".getStartedHeader", "fixedMenu");
      document.getElementById("bm-header-btn").style.display = "block";
    } else {
      removeClass(".getStartedHeader", "fixedMenu");
      document.getElementById("bm-header-btn").style.display = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    <div id="businessManagerBody"   className="businessManagerBody">
      <GetStartedHeader />
      <div className="getStartedHeader" id="getStartedHeader">
        {menu}
      </div>
      <SectionOne styles={styles} />
      <SectionTwo styles={styles} />
      <SectionThree styles={styles} />
      <SectionFour styles={styles} />
      <SectionFive styles={styles} />
      <SectionSix styles={styles} />
      <SectionSeven styles={styles} />
      <SectionEight styles={styles} />
      <SectionNine styles={styles} />
      <div style={{ backgroundColor: "#fff", padding: 20, marginTop: 100 }}>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default BusinessManager;
