import React, { useState } from "react";
import Header from "../../../common/Header";
import {  closeSearch } from "../../../common/Header/functions/header";
import { useDispatch } from "react-redux";


const LoggedIn = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Header  closeSearch={closeSearch} />
      <div id="loggedInBody"   className="loggedInBody">
        <p>LoggedIn</p>
      </div>
    </div>
  );
};

export default LoggedIn;

{
  /* <button className={styles.testScale}>ddddd</button> */
}
