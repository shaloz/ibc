import React from "react";

const Details = ({ input, handleInput, userLocation, setInput, services }) => {
  return (
    <div className="auth009">
      <div className="auth0010">
        {input.slice(0, 2).map((result, index) => (
          <div key={index}>
            <input
              type={result.type}
              placeholder={result.placeholder}
              className={result.className.hasErrors ? result.className.classNameWithErrors : result.className.classNameWithNoErrors}
              value={result.value}
              onChange={(e) => {
                handleInput(e, index, userLocation, setInput, input);
              }}
            />
          </div>
        ))}
      </div>

      {input.slice(2, 4).map((result, index) => (
        <div key={index} className="auth0011">
          <input
            type={result.type}
            placeholder={result.placeholder}
            className={result.className.hasErrors ? result.className.classNameWithErrors : result.className.classNameWithNoErrors}
            value={result.value}
            onChange={(e) => {
              if (result.type === "email") {
                handleInput(e, 2, userLocation, setInput, input);
              } else {
                handleInput(e, 3, userLocation, setInput, input);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Details;
