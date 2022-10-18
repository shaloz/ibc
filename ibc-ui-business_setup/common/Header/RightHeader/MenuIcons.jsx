import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faUserAlt, faShoppingCart, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBell } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { openNotificationMenu, openUserAccountMenu } from "../functions/header";

const MenuIcons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="rh001">
        <div className="headerIconSection tooltip">
          <div className="rh002">
            <FontAwesomeIcon icon={faHeart} className="rh003" id="searchIcon" />
            <span className="tooltiptext">Favorites</span>
          </div>
        </div>
        <div className="headerIconSection tooltip rh004" onClick={openNotificationMenu.bind(this, dispatch)}>
          <div className="rh006">
            <FontAwesomeIcon icon={faBell} className="rh005" id="searchIcon" />
          </div>
          <div className="rh009">
            <FontAwesomeIcon icon={faSortDown} className="rh007" id="searchIcon" />
          </div>
          <span className="tooltiptext">Updates</span>
        </div>

        <div
          className="headerIconSection tooltip"
          onClick={() => {
            window.location.href = "http://localhost:3031/business-manager/setup";
          }}
        >
          <div className="rh10">
            <FontAwesomeIcon icon={faStore} className="rh008" id="searchIcon" />
            <span className="tooltiptext">Business Manager</span>
          </div>
        </div>
        <div className="headerIconSection tooltip rh004" onClick={openUserAccountMenu.bind(this, dispatch)}>
          <div className="rh006">
            <FontAwesomeIcon icon={faUserAlt} className="rh005" id="searchIcon" />
          </div>
          <div className="rh009">
            <FontAwesomeIcon icon={faSortDown} className="rh007" id="searchIcon" />
          </div>
          <span className="tooltiptext">Your account</span>
        </div>
        <div className="headerIconSection tooltip">
          <div className="rh13">
            <div className="rh11">
              <p className="rh12">0</p>
            </div>
            <FontAwesomeIcon icon={faShoppingCart} className="rh008" id="searchIcon" />
            <span className="tooltiptext">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIcons;
