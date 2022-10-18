import React, { useState } from "react";
import { serviceManager } from "../stepTwo";

const steps = ["Profession", "Skills", "Work schedule", "Services you offer"];
const Service = ({ styles, handleNext }) => {
  const [activeStepInner, setActiveStepInner] = useState(0);
  const handleBackInner = () => {
    setActiveStepInner((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNextInner = () => {
    setActiveStepInner((prevActiveStep) => prevActiveStep + 1);
  };

  const handleDoneInner = () => {
    handleNext();
  };

  const button = (
    <div style={{ display: "flex", width: 1050, justifyContent: "flex-end", marginBottom: 10 }}>
      <button
        disabled={activeStepInner === 0}
        onClick={handleBackInner}
        style={{ cursor: "pointer", marginRight: 20, fontSize: 17, backgroundColor: "transparent", outline: "none" }}
      >
        Previous
      </button>
      {activeStepInner === steps.length - 1 ? (
        <button onClick={handleDoneInner} className={styles.nextButton}>
          Save and Continue
        </button>
      ) : (
        <button onClick={handleNextInner} className={styles.nextButton}>
          Next
        </button>
      )}
    </div>
  );

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        <h1 style={{ fontWeight: "400", fontSize: 24 }}>Service manager</h1>
        <p style={{ marginTop: 5, fontWeight: "100", fontSize: 14 }}>Let's get your Health, Beauty or Fashion service ready for success</p>
        <a href="/" style={{ textDecoration: "underline", color: "#000", fontSize: 14, fontWeight: "100" }}>
          Learn more
        </a>
      </div>
      <div style={{ width: 1300, boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", padding: 20, borderRadius: 3, margin: "auto" }}>
        <div style={{ width: 850, margin: "auto" }}>
          <p>
            ({activeStepInner + 1}/{steps.length}) {steps[activeStepInner]}
          </p>
          {serviceManager(activeStepInner, styles, button)}
         </div>
        
      </div>
    </div>
  );
};

export default Service;
