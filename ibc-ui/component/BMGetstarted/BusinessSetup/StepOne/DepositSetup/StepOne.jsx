import React, { useState } from "react";
import Address from "./address";

const StepOne = ({ styles }) => {
  return (
    <div style={{ marginBottom: 30 }}>
      <p style={{ marginBottom: 30 }}>Your personal details must match your banking details to avoid deposit and payments from getting declined</p>
      <p style={{ fontSize: 24, marginBottom: 15 }}>Personal</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>First name</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>Last name</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>Email</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>Birth date</p>
          <input
            type="date"
            defaultValue="2000-10-10"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
      </div>
      <p style={{ fontSize: 24, marginBottom: 15, marginTop: 20 }}>Address</p>
      <Address  styles={styles} />
    </div>
  );
};

export default StepOne;
