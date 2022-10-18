import React from "react";
import { getStepContent } from "./stepTwo";

const ProgressContent = ({ activeStep, handleNext, handleBack, styles }) => {
  return (
    <div>
      <div>{getStepContent(activeStep, styles, handleNext)}</div>
    </div>
  );
};

export default ProgressContent;
