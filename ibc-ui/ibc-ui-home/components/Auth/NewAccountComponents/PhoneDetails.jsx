import React from "react";

const PhoneDetails = ({ input, handleInput, userLocation, setInput, services }) => {
  return (
    <div>
      <p className="auth0011">Let's get you verified</p>
      <div className="auth0013">
        <div>
          <select
            className={input[4].className.hasErrors ? input[4].className.classNameWithErrors : input[4].className.classNameWithNoErrors}
            name="areaCode"
            onChange={(e) => {
              handleInput(e, 4, userLocation, setInput, input);
            }}
            value={input[4].value}
          >
            <option value={Object.entries(userLocation).length !== 0 ? userLocation.areaCode + " " + userLocation.shortCode : ""}>
              {Object.entries(userLocation).length !== 0 ? userLocation.areaCode + " " + userLocation.shortCode : "Area code"}
            </option>
            <option value="+122 MXN">+52 MXN</option>
            <option value="+44 GBP">+44 GBP</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Your number"
            name="phoneNumber"
            className={input[5].className.hasErrors ? input[5].className.classNameWithErrors : input[5].className.classNameWithNoErrors}
            value={input[5].value}
            onChange={(e) => {
              handleInput(e, 5, userLocation, setInput, input);
            }}
            disabled={input.areaCode !== "" ? false : true}
          />
        </div>
      </div>
     
    </div>
  );
};

export default PhoneDetails;
