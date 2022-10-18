import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import menu from "../functions/profileMenu";

const ProfileMenu = () => {
  return (
    <div className="popup-header-profile" id="popup-header-profile">
      <div className="rh21">
        <div>
          <div className="profile-menu-body top-profile-menu">
            <div className="rh24">
              <div className="rh22">
                <div className="rh23">
                  <FontAwesomeIcon icon={faUserAlt} className="rh26" />
                </div>
              </div>
              <div className="rh27">
                <p className="rh28">User name username</p>
                <p className="rh29">View your profile</p>
              </div>
            </div>
          </div>

          {menu.map((result, index) => (
            <div className="profile-menu-body" key={index}>
              <div className="rh24">
                <div className="rh25">
                  <FontAwesomeIcon icon={result.icon} className="rh26" />
                </div>
                <div className="rh27">
                  <p className="rh30">{result.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="profile-menu-body bottom-profile-menu">
            <div className="rh24">
              <div className="rh25">
                <FontAwesomeIcon icon={faSignOutAlt} className="rh26" />
              </div>
              <div className="rh27">
                <p className="rh30">Sign out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
