import React from "react";
import Step from "@material-ui/core/Step";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";

const Progress = ({ activeStep, steps, setActiveStep, stepAnswered }) => {
  const handleProgress = (index, label) => {
    if (stepAnswered.includes(label)) {
      setActiveStep(index);
    }
  };

  const QontoConnector = withStyles({
    alternativeLabel: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    active: {
      "& $line": {
        borderColor: "#000",
      },
    },
    completed: {
      "& $line": {
        borderColor: "#000",
      },
    },
    line: {
      borderColor: "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })(StepConnector);

  function QontoStepIcon(props) {
    const { completed } = props;

    return (
      <div style={{ ...styles.root, ...styles.active }}>
        {completed ? <CheckCircleRoundedIcon style={styles.completed} /> : <div style={styles.circle} />}
      </div>
    );
  }

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              style={{ textDecoration: "underline", cursor: stepAnswered.includes(label) ? "pointer" : "auto" }}
              onClick={handleProgress.bind(this, index, label)}
              StepIconComponent={QontoStepIcon}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

const styles = {
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#E0E0E0",
  },
  circle: {
    width: 17,
    height: 17,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#000",
    zIndex: 1,
    fontSize: 30,
  },
};

export default Progress;
