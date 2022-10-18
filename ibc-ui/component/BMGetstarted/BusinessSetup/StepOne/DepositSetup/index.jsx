import React, { useState } from "react";
import { verificationContent } from "./verification";

const steps = ["Personal details", "Identification", "Bank details"];
const DepositSetup = ({ styles, setActiveStep }) => {
  const [activeStepInner, setActiveStepInner] = useState(0);
  const handleBack = () => {
    setActiveStepInner((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    setActiveStepInner((prevActiveStep) => prevActiveStep + 1);
  };

  const handleDone = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const buttonVerification = (
    <div style={{ display: "flex", width: 1300, justifyContent: "flex-end", marginBottom: 10 }}>
      <button
        disabled={activeStepInner === 0}
        onClick={handleBack}
        style={{ cursor: "pointer", marginRight: 20, fontSize: 17, backgroundColor: "transparent", outline: "none" }}
      >
        Previous
      </button>
      {activeStepInner === steps.length - 1 ? (
        <button onClick={handleDone} className={styles.nextButton}>
          Save and Continue
        </button>
      ) : (
        <button onClick={handleNext} className={styles.nextButton}>
          Next
        </button>
      )}
    </div>
  );

  return (
    <div style={{ borderTop: "1px solid #E0E0E0", marginTop: 10 }}>
      <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        <h1 style={{ fontWeight: "400", fontSize: 24 }}>How you'll get paid</h1>
        <p style={{ marginTop: 5, fontWeight: "100", fontSize: 14 }}>
          iBeautyConnect Payments gives buyers the most payment options and gives you iBeautyConnect seller protection.
        </p>
        <a href="/" style={{ textDecoration: "underline", color: "#000", fontSize: 14, fontWeight: "100" }}>
          Learn more
        </a>
      </div>

      <div style={{ width: 1300, boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", padding: 20, borderRadius: 3, margin: "auto" }}>
        <div style={{ width: 850, margin: "auto" }}>
          <p>
            ({activeStepInner + 1}/{steps.length}) {steps[activeStepInner]}
          </p>
          {verificationContent(activeStepInner, styles)}
        </div>
        {buttonVerification}
      </div>
    </div>
  );
};

export default DepositSetup;
