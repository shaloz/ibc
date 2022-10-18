import React, { useState } from "react";
import { getStorage } from "../../../../functions/localStorage";

const StepThree = ({ styles }) => {
  let content = null;

  if (getStorage("shopCountry") === "United States") {
    content = (
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>Account number</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>Routing number</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
      </div>
    );
  } else if (getStorage("shopCountry") === "United Kingdom") {
    content = (
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>Account number</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>Sort code</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
      </div>
    );
  } else if (getStorage("shopCountry") === "Mexico") {
    content = (
      <div style={{ marginTop: 10 }}>
        <div>
          <p style={{ fontWeight: "100" }}>CLABE</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
      </div>
    );
  } else if (getStorage("shopCountry") === "Canada") {
    content = (
      <div>
        <div>
          <p style={{ fontWeight: "100" }}>Account number</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
          <div style={{ width: 360 }}>
            <p style={{ fontWeight: "100" }}>Transit number</p>
            <input
              type="text"
              style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
            />
          </div>
          <div style={{ width: 360 }}>
            <p style={{ fontWeight: "100" }}>Institution number</p>
            <input
              type="text"
              style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
            />
          </div>
        </div>
      </div>
    );
  } else if (getStorage("shopCountry") === "Australia") {
    content = (
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>Account number</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>BSB</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
      </div>
    );
  } else {
    content = (
      <div style={{ marginTop: 10 }}>
        <div>
          <p style={{ fontWeight: "100" }}>IBAN</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: 30 }}>
      <p>Where will you want us to deposit your check</p>
      {content}
    </div>
  );
};

export default StepThree;

// {bankingDetails(getStorage("shopCountry"), styles)}
