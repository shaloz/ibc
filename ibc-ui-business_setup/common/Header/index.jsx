import React from "react";
import RightHeader from "./RightHeader";
import MiddleHeader from "./MiddleHeader";

const Header = () => {
  return (
    <div className="ibc-global-header">
      <div className="ibc-global-header-inner">
        <div className="inner-container">
          <div className="left-header">
            <img
              src="/image/logo_sticky.png"
              className="h001"
              onClick={() => {
                window.location.href = "/";
              }}
            />
          </div>
          <MiddleHeader />
          <RightHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
