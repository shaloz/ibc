import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/AuthActions";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <div className="auth001">
          <input type="text" placeholder="Your email" className="input-auth001" />
        </div>
        <div className="auth001">
          <input type="password" placeholder="Your password" className="input-auth001" />
        </div>
        <div>
          <div>
            <button className="btn btn-purple">Log In</button>
          </div>
        </div>
        <div className="auth002">
          <a href="/" className="auth003">
            Forgot password?
          </a>
        </div>
        <div className="auth-line"></div>
        <div>
          <div>
            <button
              className="btn btn-orange"
              onClick={(e) => {
                e.preventDefault();
                dispatch(actions.handleAuthModal(true));
              }}
            >
              Create New Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
