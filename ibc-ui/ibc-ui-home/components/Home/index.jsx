import React, { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import SectionOne from "./LoggedOut/SectionOne";
import Footer from "../../common/Footer";
import { handleScroll } from "../functions/landingPage";
import dynamic from "next/dynamic";
import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";

const LandingPage = ({ isLoggedIn }) => {
  const { openNewAccountModal } = useSelector((state) => state.authModalReducer);

  useEffect(() => {
    if (!isLoggedIn) {
      if (!openNewAccountModal) {
        window.addEventListener("scroll", handleScroll, { passive: true });
      }
    }
  }, [openNewAccountModal, isLoggedIn]);
  let NewAccountModal = null;
  if (openNewAccountModal) {
    NewAccountModal = dynamic(() => import("../../component/Auth/NewAccountModal"));
  }

  let render = null;

  if (!isLoggedIn) {
    render = (
      <div>
        <SectionOne />
        <div className="body-container">
          <LoggedOut />
        </div>
        <Footer />
        {openNewAccountModal ? <NewAccountModal openNewAccountModal={openNewAccountModal} /> : <></>}
      </div>
    );
  } else {
    render = (
      <div>
        <LoggedIn />
      </div>
    );
  }

  return <section id="landing-page-body">{render}</section>;
};

export default memo(LandingPage, (props, nextProps) => {
  return props.deviceType === nextProps.deviceType;
});
