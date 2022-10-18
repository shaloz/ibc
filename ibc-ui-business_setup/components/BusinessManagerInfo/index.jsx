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
import { addClass, removeClass } from "../../helpers/dom";
import Footer from "../../common/Footer";

const BusinessManager = () => {
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
  const menu = (
    <div>
      <div id="menuBar" className="menuBar">
        <div className="menuContainerInner">
          <p>Fees</p>
        </div>
        <div className="menuContainerInner">
          <p>Tools</p>
        </div>
        <div className="menuContainerInner">
          <p>Support</p>
        </div>
        <div className="menuContainerInner">
          <p>Stories</p>
        </div>
        <div className="menuContainerInner">
          <p>Selling</p>
        </div>
        <div className="menuContainerInner">
          <p>FAQ</p>
        </div>
        <div>
          <button className="bm-header-btn" id="bm-header-btn">
            Open your iBC Business
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div id="businessManagerBody" className="businessManagerBody">
      <GetStartedHeader />
      <div className="getStartedHeader" id="getStartedHeader">
        {menu}
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <Footer />
    </div>
  );
};

export default BusinessManager;
