import React from "react";
import RightHeader from "./RightHeader";
import MiddleHeader from "./MiddleHeader";

const Header = ({  closeSearch }) => {
  return (
    <div className="ibc-global-header">
      <div className="ibc-global-header-inner">
        <div className="inner-container">
          <div className="left-header">
            <img
              src="/image/logo_sticky.png"
              style={{ width: "100%", cursor: "pointer", marginTop: 6 }}
              onClick={() => {
                window.location.href = "/";
              }}
            />
          </div>
          <MiddleHeader />
          <RightHeader
             closeSearch={closeSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
