import React from "react";
import Login from "../../../component/Auth/Login";
import StickyHeader from "./StickyHeader";

const SectionOne = () => {
  return (
    <section className="section1">
      <StickyHeader />

      <div className="ibc1">
        <div className="navbar">
          <div className="navbar_inner">
            <div>
              <a href="/" className="navbar_link">
                Products
              </a>
            </div>
            <div>
              <a href="/" className="navbar_link">
                Services
              </a>
            </div>
            <div>
              <a href="/" className="navbar_link">
                Sell
              </a>
            </div>
            <div>
              <a href="/" className="navbar_link">
                Help
              </a>
            </div>
          </div>
        </div>

        <div className="section1Inner">
          <div className="section1_inner_box">
            <div className="section1_left_box">
              <img src="/image/logo.png" className="ibc001" />
            </div>
            <div className="section1_right_box">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
