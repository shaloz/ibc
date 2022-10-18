import React from "react";
import { getStepContent } from "./stepOne";

const ProgressContent = ({ activeStep, steps, handleNext, handleBack, styles, setActiveStep }) => {
  const handleDone = () => {
    alert("done");
  };

  const buttons = (
    <div style={{ display: "flex", width: 1300, justifyContent: "flex-end", marginBottom: 10 }}>
      <button
        disabled={activeStep === 0}
        onClick={handleBack}
        style={{ cursor: "pointer", marginRight: 20, fontSize: 17, backgroundColor: "transparent", outline: "none" }}
      >
        Previous
      </button>

      {activeStep === steps.length - 1 ? (
        <button onClick={handleDone} className={styles.nextButton}>
          Finish
        </button>
      ) : (
        <button onClick={handleNext} className={styles.nextButton}>
          Save and continue
        </button>
      )}
    </div>
  );
  return (
    <div>
      {activeStep === steps.length ? (
        <div>
          <p> All steps completed - you&apos;re finished</p>
        </div>
      ) : (
        <div>
          <div>{getStepContent(activeStep, styles, buttons, setActiveStep)}</div>
        </div>
      )}
    </div>
  );
};

export default ProgressContent;
