import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ styles ,button}) => {
  return (
    <div style={{marginBottom: 40}}>
      <p>
        Skills help you stand out to clients. The more skills you have in your business the most likely are you to get more client and appear in
        searches
        {"  "}
        <a href="/" style={{ textDecoration: "underline", color: "#000", fontWeight: "100" }}>
          Learn more
        </a>
      </p>
      <div style={{marginTop: 10}}>
        <div style={{ width: 850, margin: "auto" }}>
          <div style={{ display: "flex", border: "1px solid #E0E0E0" }}>
            <div style={{ width: 650 }}>
              <input
                placeholder="Enter your skills"
                style={{ border: "none", outline: "none", width: 600, padding: 20, fontSize: 18, fontWeight: "100" }}
              />
            </div>
            <div style={{ borderLeft: "1px solid #E0E0E0", width: 200, cursor: "pointer" }}>
              <div style={{ padding: 17, textAlign: "center" }}>
                <p style={{ fontSize: 18 }}>Add skill</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop: 20}}>
      {button}
      </div>
    </div>
  );
};

export default Skills;
