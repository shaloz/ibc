import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const Profession = ({ styles, button }) => {
  const [payload, setPayload] = useState([]);
  const selectRef = useRef([]);

  const data = [
    {
      text: "Estheticians",
    },
    {
      text: "Aesthetician",
    },
    {
      text: "Fitness trainers",
    },
    {
      text: "Tattoo artists",
    },
    {
      text: "Cosmetologists",
    },
    {
      text: "Chiropractors",
    },
    {
      text: "Barbers",
    },
    {
      text: "Fashion Stylist",
    },
  ];

  const handleSelect = (result, index) => {
    const newPayload = [...payload, result];
    if (payload.filter((value) => result.text === value.text).length === 0) {
      //add
      selectRef.current[index].style.backgroundColor = "#000";
      selectRef.current[index].style.color = "#fff";
      setPayload(newPayload);
    } else {
      //remove
      const unCheck = payload.filter((value) => result.text !== value.text);
      selectRef.current[index].style.backgroundColor = "#E0E0E0";
      selectRef.current[index].style.color = "#000";
      setPayload(unCheck);
    }
  };

  const icon = (result) =>
    payload.filter((value) => result.text === value.text).length === 0 ? <FontAwesomeIcon icon={faCircle} /> : <FontAwesomeIcon icon={faCheck} />;

  return (
    <div>
      <p>
        What professional Health, Beauty or Fashion services does your business fall under? For naming definitions, read more about how iBeautyConnect
        categories professions.
        {"  "}
        <a href="/" style={{ textDecoration: "underline", color: "#000", fontWeight: "100" }}>
          Learn more
        </a>
      </p>

      <div style={{ width: 900, marginBottom: 20 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {data.map((result, index) => (
            <div
              ref={(el) => (selectRef.current[index] = el)}
              key={index}
              style={{
                display: "flex",
                padding: 10,
                backgroundColor: "#E0E0E0",
                width: 180,
                borderRadius: 50,
                justifyContent: "center",
                cursor: "pointer",
                marginRight: 20,
                marginTop: 20,
              }}
              onClick={handleSelect.bind(this, result, index)}
            >
              <div style={{ marginRight: 10 }}>{icon(result)}</div>
              <div>
                <p>{result.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {button}
    </div>
  );
};

export default Profession;
