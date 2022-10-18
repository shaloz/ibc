import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions/AuthActions";

const StickyHeader = () => {
  const dispatch = useDispatch();

  return (
    <section className="navbar-sticky navbar-brand">
      <div className="ibc005">
        <div className="ibc006">
          <div className="ibc007">
            <div className="ibc008">
              <img
                src="/image/logo_sticky.png"
                className="ibc009"
                onClick={() => {
                  window.location.href = "/";
                }}
              />
            </div>
            <div className="ibc0010">
              <div className="ibc0011">
                <input type="text" placeholder="Your email" className="input001" />
              </div>
              <div className="ibc0011">
                <input type="password" placeholder="Your password" className="input001" />
              </div>
              <div>
                <button className="btn-sticky btn-purple">Log In</button>
                <button
                  className="btn-sticky btn-orange"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(actions.handleAuthModal(true));
                  }}
                >
                  Create New Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyHeader;
