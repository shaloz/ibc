import React, { useState, useEffect } from "react";
import { setStorage, getStorage } from "../../../helpers/localStorage";
import Progress from "./Progress";
import ProgressContent from "./ProgressContent";

const steps = ["Service", "Products"];

const StepTwo = ({styles}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepAnswered, setStepAnswered] = useState([]);
  const [loadStyles, setLoadStyles] = useState(false);

  const handleNext = () => {
    const answered = steps[activeStep];
    setStepAnswered((prev) => {
      const data = [...prev, answered];
      setStorage("stepTwo", data);
      return data;
    });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const stepTwoProgress = getStorage("stepTwo");
    console.log(stepTwoProgress);
    if (stepTwoProgress) {
      setActiveStep(1);
      setStepAnswered(stepTwoProgress);
    }
    setLoadStyles(true);
  }, []);

  return (
    <div>
      {loadStyles && (
        <div>
          <Progress
            activeStep={activeStep}
            steps={steps}
            stepAnswered={stepAnswered}
            setActiveStep={setActiveStep}
            setStepAnswered={setStepAnswered}
            stepAnswered={stepAnswered}
            styles={styles}
          />
            <ProgressContent activeStep={activeStep} styles={styles} steps={steps} handleBack={handleBack} handleNext={handleNext} setActiveStep={setActiveStep} />
        </div>
      )}
    </div>
  );
};

export default StepTwo;
