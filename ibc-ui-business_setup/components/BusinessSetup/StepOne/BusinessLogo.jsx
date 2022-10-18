import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const BusinessLogo = ({ styles, buttons }) => {
  const handleLogo = (position) => {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = ".png,.jpg";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        const content = readerEvent.target.result; // this is the content!

        document.getElementById("logo").src = content;
        document.getElementById("logoButton").style.display = "none";
        document.getElementById("logo").style.display = "block";
      };
    };
    input.click();
  };
  return (
    <div style={{ borderTop: "1px solid #E0E0E0", marginTop: 10 }}>
      <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        <h1 style={{ fontWeight: "400", fontSize: 24 }}>Business Logo</h1>
        <p style={{ marginTop: 5, fontWeight: "100", fontSize: 14 }}>Make your business stand out with a cool logo.</p>
      </div>
      {buttons}
      <div style={{ width: 1200, boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", padding: 20, borderRadius: 3, margin: "auto" }}>
        <div style={{ marginBottom: 30,  }}>
          <div>
            <div style={{ width: 400, margin: 'auto' }}>
              <div>
                <div style={{ width: 500, border: "1px solid #E0E0E0", height: 350, borderRadius: 5 }} onClick={handleLogo.bind(this, "back")}>
                  <div style={{ textAlign: "center", marginTop: 150, color: "gray", cursor: "pointer" }} id="logoButton">
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <p>Browse</p>
                  </div>
                  <img src="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "none" }} id="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLogo;
