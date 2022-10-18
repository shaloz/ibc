import React, { useState } from "react";
import Header from "../../../common/Header";
import { useSelector } from "react-redux";

const LoggedIn = (props) => {
  const { user } = props;
  return (
    <div>
      <Header />
      <div id="loggedInBody" className="loggedInBody">
        <p>{user.details.firstName}</p>
      </div>
    </div>
  );
};

export default LoggedIn;
