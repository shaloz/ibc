import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {  faCircle } from "@fortawesome/free-regular-svg-icons";

const BusinessType = ({ styles, buttons }) => {
  const [payload, setPayload] = useState([]);
  const selectRef = useRef([]);
  const selectRef2 = useRef([]);
  const data = [
    {
      category: "service",
      text: "Health services",
    },
    {
      category: "service",
      text: "Beauty services",
    },
    {
      category: "service",
      text: "Fashion services",
    },
    {
      category: "product",
      text: "Health products",
    },
    {
      category: "product",
      text: "Beauty products",
    },
    {
      category: "product",
      text: "Fashion products",
    },
  ];

  const handleSelect = (result, index) => {
    const newPayload = [...payload, result];
    if (payload.filter((value) => result.text === value.text).length === 0) {
      //add
      selectRef.current[index].style.backgroundColor = "#7c4fe0";
      selectRef.current[index].style.color = "#fff";
      setPayload(newPayload);
    } else {
      //remove
      const unCheck = payload.filter((value) => result.text !== value.text);
      selectRef.current[index].style.backgroundColor = "#E1BEE7";
      selectRef.current[index].style.color = "#000";
      setPayload(unCheck);
    }
  };

  const handleSelect2 = (result, index) => {
    const newPayload = [...payload, result];
    if (payload.filter((value) => result.text === value.text).length === 0) {
      //add
      selectRef2.current[index].style.backgroundColor = "#000";
      selectRef2.current[index].style.color = "#fff";
      setPayload(newPayload);
    } else {
      //remove
      const unCheck = payload.filter((value) => result.text !== value.text);
      selectRef2.current[index].style.backgroundColor = "#E0E0E0";
      selectRef2.current[index].style.color = "#000";
      setPayload(unCheck);
    }
  };

  const icon = (result) =>
    payload.filter((value) => result.text === value.text).length === 0 ? <FontAwesomeIcon icon={faCircle} /> : <FontAwesomeIcon icon={faCheck} />;
  return (
    <div style={{ borderTop: "1px solid #E0E0E0", marginTop: 10 }}>
      <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        <h1 style={{ fontWeight: "400", fontSize: 24 }}>Business type</h1>
        <p style={{ marginTop: 5, fontWeight: "100", fontSize: 14 }}>What services or products does your business sell.</p>
      </div>
      {buttons}
      <div style={{ width: 1200, boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", padding: 20, borderRadius: 3, margin: "auto" }}>
        <div style={{ marginBottom: 50, marginTop: 50, marginLeft: 30 }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ marginBottom: 10 }}>What type of services does your business offer?</p>
            <div
              style={{
                display: "flex",
                marginLeft: 20,
              }}
            >
              {data.slice(0, 3).map((result, index) => (
                <div
                  ref={(el) => (selectRef.current[index] = el)}
                  key={index}
                  style={{
                    display: "flex",
                    padding: 10,
                    backgroundColor: "#E1BEE7",
                    width: 180,
                    borderRadius: 50,
                    justifyContent: "center",
                    cursor: "pointer",
                    marginRight: 20,
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
          <div style={{ marginBottom: 20 }}>
            <p style={{ marginBottom: 10 }}>What type of products does your business sell?</p>
            <div
              style={{
                display: "flex",
                marginLeft: 20,
              }}
            >
              {data.slice(3, 6).map((result, index) => (
                <div
                  ref={(el) => (selectRef2.current[index] = el)}
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
                  }}
                  onClick={handleSelect2.bind(this, result, index)}
                >
                  <div style={{ marginRight: 10 }}>{icon(result)}</div>
                  <div>
                    <p>{result.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "gray", fontWeight: "100", fontSize: 13, marginTop: 50 }}>
              You can always change this in settings. But first we need to set your business up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessType;
