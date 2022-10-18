import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faUserAlt, faShoppingCart, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBell } from "@fortawesome/free-regular-svg-icons";
import * as actions from "../../../store/actions/HeaderActions";
import { useDispatch } from "react-redux";

const MenuIcons = ({ closeSearch }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 10 }}>
        <div className="headerIconSection tooltip">
          <div style={{ width: 30, textAlign: "center" }}>
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: 19, color: "#000", marginTop: 5 }} id="searchIcon" />
            <span className="tooltiptext">Favorites</span>
          </div>
        </div>
        <div
          className="headerIconSection tooltip"
          style={{ display: "flex", width: 40, justifyContent: "space-between" }}
          onClick={() => {
            dispatch(actions.handleNotificationMenu("toggle"));
            dispatch(actions.handleProfileMenu("reset"));
            closeSearch();
          }}
        >
          <div style={{ marginTop: 3 }}>
            <FontAwesomeIcon icon={faBell} style={{ fontSize: 19, color: "#000" }} id="searchIcon" />
          </div>
          <div style={{ padding: 0 }}>
            <FontAwesomeIcon icon={faSortDown} style={{ fontSize: 19, color: "#BDBDBD" }} id="searchIcon" />
          </div>
          <span className="tooltiptext">Updates</span>
        </div>

        <div
          className="headerIconSection tooltip"
          onClick={() => {
            window.location.href = "/getstarted/business-manager";
          }}
        >
          <div style={{ width: 30, textAlign: "center" }}>
            <FontAwesomeIcon icon={faStore} style={{ fontSize: 19, color: "#000", marginTop: 5 }} id="searchIcon" />
            <span className="tooltiptext">Business Manager</span>
          </div>
        </div>
        <div
          className="headerIconSection tooltip"
          style={{ display: "flex", width: 40, justifyContent: "space-between" }}
          onClick={() => {
            closeSearch();
            dispatch(actions.handleProfileMenu("toggle"));
            dispatch(actions.handleNotificationMenu("reset"));
          }}
        >
          <div style={{ marginTop: 3 }}>
            <FontAwesomeIcon icon={faUserAlt} style={{ fontSize: 19, color: "#000" }} id="searchIcon" />
          </div>
          <div style={{ padding: 0 }}>
            <FontAwesomeIcon icon={faSortDown} style={{ fontSize: 19, color: "#BDBDBD" }} id="searchIcon" />
          </div>
          <span className="tooltiptext">Your account</span>
        </div>
        <div className="headerIconSection tooltip">
          <div style={{ width: 32, textAlign: "center" }}>
            <div
              style={{
                position: "absolute",
                top: 5,
                backgroundColor: "#E1BEE7",
                borderRadius: "50%",
                marginLeft: 20,
                width: 20,
              }}
            >
              <p style={{ fontSize: 13 }}>0</p>
            </div>
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: 19, color: "#000", marginTop: 5 }} id="searchIcon" />
            <span className="tooltiptext">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIcons;
