import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const Verification = ({ onSendCode, input, services, verificationError, setInput }) => {
  const [messageSent, setMessageSent] = useState("");
  return (
    <div className="auth0011">
      <p>Enter the code sent to you</p>
      <input
        type="text"
        className={input[6].className.hasErrors ? input[6].className.classNameWithErrors : input[6].className.classNameWithNoErrors}
        value={input[6].value}
        onChange={(e) => {
          const array = [...input];
          array[6].value = e.target.value;
          array[6].className.hasErrors = false
          setInput(array);
        }}
      />
      {messageSent !== "" && (
        <div>
          <p className="authCodeSent">{messageSent}</p>
        </div>
      )}
      <button
        className="resendCodeBtn"
        onClick={() => {
          onSendCode(input, services);
          setMessageSent("We just resent a new code");
          setTimeout(() => {
            setMessageSent("");
          }, 2000);
        }}
      >
        <FontAwesomeIcon icon={faSyncAlt} /> Resend code
      </button>
      {verificationError !== "" && (
        <div className="authVerificationError">
          <p className="authVerificationErrorText">{verificationError}</p>
        </div>
      )}
      <p className="auth0016">
        By Signing Up, you agree to our <a href="/">Terms and Data Policy</a>. You may receive SMS Notifications from us and can opt out any time.
      </p>
    </div>
  );
};

export default Verification;
