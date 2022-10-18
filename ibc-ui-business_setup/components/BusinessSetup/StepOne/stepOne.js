import BusinessPreferences from "./BusinessPreferences";
import NameYourBusiness from "./NameYourBusiness";
import BusinessType from "./BusinessType";
import DepositSetup from "./DepositSetup";
import BusinessLogo from "./BusinessLogo";

export const getStepContent = (step, styles, buttons, setActiveStep) => {
  switch (step) {
    case 0:
      return <BusinessPreferences styles={styles} buttons={buttons} />;
    case 1:
      return <NameYourBusiness styles={styles} buttons={buttons} />;
    case 2:
      return <BusinessLogo styles={styles} buttons={buttons} />;
    case 3:
      return <DepositSetup styles={styles} setActiveStep={setActiveStep} />;
    case 4:
      return <BusinessType styles={styles} buttons={buttons} />;
    default:
      return "Unknown step";
  }
};
