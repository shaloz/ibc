import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faClipboardList, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faComments, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";

const ProfileMenu = () => {
  return (
    <div className="popup-header-profile" id="popup-header-profile">
      <div style={{ display: "flex", flexDirection: "column", height: 350, justifyContent: "space-between" }}>
        <div>
          <div className="profile-menu-body top-profile-menu">
            <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
              <div style={{ width: 35, marginTop: 10, marginRight: 10 }}>
                <div style={{ backgroundColor: "#E0E0E0", textAlign: "center", padding: 5, borderRadius: "50%" }}>
                  <FontAwesomeIcon icon={faUserAlt} style={{ fontSize: 19, color: "#000" }} />
                </div>
              </div>
              <div style={{ width: 195 }}>
                <p style={{ fontSize: 15, marginTop: 7, fontWeight: "500" }}>User name username</p>
                <p style={{ fontSize: 13, fontWeight: "100" }}>View your profile</p>
              </div>
            </div>
          </div>
          <div className="profile-menu-body">
            <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
              <div style={{ width: 35, marginRight: 5, marginLeft: 10 }}>
                <FontAwesomeIcon icon={faMoneyBillAlt} style={{ fontSize: 19, color: "#000" }} />
              </div>
              <div style={{ width: 195 }}>
                <p style={{ fontSize: 15, fontWeight: "100" }}>Points balance: $0.00</p>
              </div>
            </div>
          </div>
          <div className="profile-menu-body">
            <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
              <div style={{ width: 35, marginRight: 5, marginLeft: 10 }}>
                <FontAwesomeIcon icon={faComments} style={{ fontSize: 19, color: "#000" }} />
              </div>
              <div style={{ width: 195 }}>
                <p style={{ fontSize: 15, fontWeight: "100" }}>Messages</p>
              </div>
            </div>
          </div>
          <div className="profile-menu-body">
            <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
              <div style={{ width: 35, marginRight: 5, marginLeft: 10 }}>
                <FontAwesomeIcon icon={faClipboardList} style={{ fontSize: 19, color: "#000" }} />
              </div>
              <div style={{ width: 195 }}>
                <p style={{ fontSize: 15, fontWeight: "100" }}>Purchase and reviews</p>
              </div>
            </div>
          </div>
          <div className="profile-menu-body">
            <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
              <div style={{ width: 35, marginRight: 5, marginLeft: 10 }}>
                <FontAwesomeIcon icon={faCog} style={{ fontSize: 19, color: "#000" }} />
              </div>
              <div style={{ width: 195 }}>
                <p style={{ fontSize: 15, fontWeight: "100" }}>Account settings</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="profile-menu-body bottom-profile-menu">
            <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
              <div style={{ width: 35, marginRight: 5, marginLeft: 10 }}>
                <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: 19, color: "#000" }} />
              </div>
              <div style={{ width: 195 }}>
                <p style={{ fontSize: 15, fontWeight: "100" }}>Sign out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
