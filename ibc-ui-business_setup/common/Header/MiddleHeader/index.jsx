import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import { handleClickOutSide, handleSearch, onInputClick, handleClearInput } from "../functions/header";

const MiddleHeader = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        handleClickOutSide(dispatch);
      }}
    >
      <div className="middle-header" id="middle-header">
        <div>
          <input
            type="text"
            className="header-search"
            placeholder="Search for anything"
            id="header-search"
            onClick={onInputClick.bind(this, dispatch)}
            value={searchText}
            onChange={(e) => {
              handleSearch(e, setSearchText);
            }}
          />
        </div>
        <div className="mh004">
          <div className="clear-search-container" id="clear-search-container">
            <FontAwesomeIcon icon={faTimes} className="mh003" id="clear-search-icon" onClick={handleClearInput.bind(this, setSearchText)} />
          </div>
          <div className="search-button-container" id="search-button-container">
            <button className="mh001">
              <FontAwesomeIcon icon={faSearch} className="mh002" id="searchIcon" />
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
