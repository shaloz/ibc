import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NameYourBusiness = ({ styles, buttons }) => {
   const [error, setError] = useState(false);
 
  return (
    <div style={{ borderTop: "1px solid #E0E0E0", marginTop: 10 }}>
      <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        <h1 style={{ fontWeight: "400", fontSize: 24 }}>Name your business</h1>
        <p style={{ marginTop: 5, fontWeight: "100", fontSize: 14 }}>Choose a memorable name that reflects your business</p>
      </div>
      {buttons}
      <div style={{ width: 1200, boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", padding: 20, borderRadius: 3, margin: "auto" }}>
        <div style={{ width: 850, margin: "auto" }}>
          <div style={{ display: "flex", border: "1px solid #E0E0E0" }}>
            <div style={{ width: 650 }}>
              <div
                style={{
                  backgroundColor: "#E65100",
                  color: "#fff",
                  width: 100,
                  borderRadius: 50,
                  textAlign: "center",
                  paddingBottom: 2,
                  marginTop: 19,
                  float: "right",
                  marginRight: 10,
                  position: "absolute",
                  marginLeft: 540,
                }}
              >
                <FontAwesomeIcon icon={faTimes} style={{ marginRight: 5, fontSize: 12 }} />
                <span style={{ fontSize: 12 }}>Available</span>
              </div>

              <input
                placeholder="Enter your business name"
                style={{ border: "none", outline: "none", width: 600, padding: 20, fontSize: 18, fontWeight: "100" }}
              />
            </div>
            <div style={{ borderLeft: "1px solid #E0E0E0", width: 200, cursor: "pointer" }}>
              <div style={{ padding: 17, textAlign: "center" }}>
                <p style={{ fontSize: 18 }}>Check availability</p>
              </div>
            </div>
          </div>
          {error && <p style={{ color: "red", fontWeight: "100", marginTop: 5 }}>Business names must have 5 - 25 characters</p>}
          <div>
            <p style={{ color: "gray", fontWeight: "100", fontSize: 12, textAlign: "center", marginTop: 30 }}>
              Your business name will appear in your business and next to each of your services or products throughout iBeautyConnect. After you open
              your business, you can change your name once
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameYourBusiness;
