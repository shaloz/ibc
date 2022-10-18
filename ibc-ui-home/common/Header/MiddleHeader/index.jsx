import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../../../store/actions/HeaderActions";
import { useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import {handleClickOutSide} from '../functions/header'

const MiddleHeader = ({}) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.target.value === "") {
      document.getElementById("clear-search-icon").style.visibility = "hidden";
    } else {
      document.getElementById("clear-search-icon").style.visibility = "visible";
    }

    setSearchText(e.target.value);
  };

  return (
       <OutsideClickHandler
      onOutsideClick={() => {
              dispatch(actions.handleNotificationMenu("reset"));
              dispatch(actions.handleProfileMenu("reset"));
              handleClickOutSide(dispatch)
      }}
     >
      <div className="middle-header" id="middle-header">
        <div>
          <input
            type="text"
            className="header-search"
            placeholder="Search for anything"
            id="header-search"
            onClick={() => {
              dispatch(actions.handleNotificationMenu("reset"));
              dispatch(actions.handleProfileMenu("reset"));
              document.getElementById("middle-header").style.border = "1px solid #000";
              document.getElementById("middle-header").style.backgroundColor = "#fff";
              document.getElementById("header-search").style.backgroundColor = "#fff";
              document.getElementById("clear-search-container").style.backgroundColor = "#fff";
              document.getElementById("search-button-container").style.backgroundColor = "#000";
              document.getElementById("searchIcon").style.color = "#fff";
              document.getElementById("search-box").style.visibility = "visible";
              document.getElementById("search-box").style.transform = "translateY(10px)";
            }}
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div className="clear-search-container" id="clear-search-container">
            <FontAwesomeIcon icon={faTimes} style={{ fontSize: 23, marginTop: 12, visibility: "hidden", cursor: "pointer" }} id="clear-search-icon" />
          </div>
          <div className="search-button-container" id="search-button-container">
            <button style={{ marginTop: 12, textAlign: "center", backgroundColor: "transparent", outline: "none", cursor: "pointer" }}>
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: 23, color: "#000" }} id="searchIcon" />
            </button>
          </div>
        </div>

        <div className="search-box" id="search-box">
          <div className="search-box-inner">
            <p>dsdsdsd</p>
            <p>dsdsdsd</p>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default MiddleHeader;
