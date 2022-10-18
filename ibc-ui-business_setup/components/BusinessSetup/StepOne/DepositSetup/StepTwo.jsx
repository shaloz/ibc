import React, { useState } from "react";
import { getStorage } from "../../../../helpers/localStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
//note on austria for address in backend - owner not individual

const StepTwo = ({ styles }) => {
  let contentToRender = null;
  if (getStorage("shopCountry") === "United States") {
    contentToRender = (
      <div>
        <p>
          SSN <span style={{ color: "gray" }}>*</span>
        </p>
        <input
          type="text"
          style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
        />
      </div>
    );
  } else if (getStorage("shopCountry") === "Canada") {
    contentToRender = (
      <div>
        <p>
          SIN <span style={{ color: "gray" }}>*</span>
        </p>
        <input
          type="text"
          style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
        />
      </div>
    );
  } else {
    contentToRender = (
      <div>
        <p>
          Id Number <span style={{ color: "gray" }}>*</span>
        </p>
        <input
          type="text"
          style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
        />
      </div>
    );
  }

  const handlePhotoId = (position) => {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = ".png,.jpg";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        const content = readerEvent.target.result; // this is the content!
        if (position === "front") {
          document.getElementById("photoIdFront").src = content;
          document.getElementById("photoIdFrontButton").style.display = "none";
          document.getElementById("photoIdFront").style.display = "block";
        } else {
          document.getElementById("photoIdBack").src = content;
          document.getElementById("photoIdBackButton").style.display = "none";
          document.getElementById("photoIdBack").style.display = "block";
        }
      };
    };
    input.click();
  };
  return (
    <div style={{ marginBottom: 30 }}>
      <p>
        By law, we have to verify all accounts. Document should not be blurry.{" "}
        <a href="/" style={{ fontWeight: "100", textDecoration: "underline", color: "#000", cursor: "pointer" }}>
          See our list of acceptable documents
        </a>
      </p>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
          <div style={{ width: 370 }}>
            {contentToRender}
            <div style={{ marginTop: 20 }}>
              <div>
                <p>
                  Photo Id Front <span style={{ color: "gray" }}>*</span>
                </p>
              </div>
              <div style={{ width: 400, border: "1px solid #E0E0E0", height: 250, borderRadius: 5 }} onClick={handlePhotoId.bind(this, "front")}>
                <div style={{ textAlign: "center", marginTop: 100, color: "gray", cursor: "pointer" }} id="photoIdFrontButton">
                  <FontAwesomeIcon icon={faPlusCircle} />
                  <p>Browse</p>
                </div>
                <img src="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "none" }} id="photoIdFront" />
              </div>
            </div>
          </div>
          <div style={{ width: 400 }}>
            <div>
              <div>
                <p>
                  Photo Id Back <span style={{ color: "gray" }}>*</span>
                </p>
              </div>
              <div style={{ width: 500, border: "1px solid #E0E0E0", height: 350, borderRadius: 5 }} onClick={handlePhotoId.bind(this, "back")}>
                <div style={{ textAlign: "center", marginTop: 150, color: "gray", cursor: "pointer" }} id="photoIdBackButton">
                  <FontAwesomeIcon icon={faPlusCircle} />
                  <p>Browse</p>
                </div>
                <img src="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "none" }} id="photoIdBack" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
