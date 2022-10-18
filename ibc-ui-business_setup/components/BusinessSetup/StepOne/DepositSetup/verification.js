import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
 
export const verificationContent = (step, styles) => {
  switch (step) {
    case 0:
      return <StepOne styles={styles} />;
    case 1:
      return <StepTwo styles={styles} />;
    case 2:
      return <StepThree styles={styles} />;

    default:
      return "Unknown step";
  }
};

 