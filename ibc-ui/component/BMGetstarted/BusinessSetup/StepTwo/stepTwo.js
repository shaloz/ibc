import Service from "./service";
import Product from "./product";
import Profession from "./service/Profession";
import Skills from "./service/Skills";
import WorkSchedule from "./service/WorkSchedule";
import ServicesOffered from "./service/ServicesOffered";
import Photos from "./product/components/Photos";
import ListingDetails from "./product/components/ListingDetails";
import InventoryPrice from "./product/components/InventoryPrice";
import Variations from "./product/components/Variations";
import Personalization from "./product/components/Personalization";
import Shipping from "./product/components/Shipping";

export const getStepContent = (step, styles, handleNext) => {
  switch (step) {
    case 0:
      return <Service styles={styles} handleNext={handleNext} />;
    case 1:
      return <Product styles={styles} handleNext={handleNext} />;
    default:
      return "Unknown step";
  }
};

export const serviceManager = (step, styles, button) => {
  switch (step) {
    case 0:
      return <Profession styles={styles} button={button}/>;
    case 1:
      return <Skills styles={styles}  button={button}/>;
    case 2:
      return <WorkSchedule styles={styles}  button={button}/>;
    case 3:
      return <ServicesOffered styles={styles}  button={button}/>;
    default:
      return "Unknown step";
  }
};

export const productManager = (step, styles) => {
  switch (step) {
    case 0:
      return <Photos styles={styles} />;
    case 1:
      return <ListingDetails styles={styles} />;
    case 2:
      return <InventoryPrice styles={styles} />;
    case 3:
      return <Variations styles={styles} />;
    case 4:
      return <Personalization styles={styles} />;
    case 5:
      return <Shipping styles={styles} />;
    default:
      return "Unknown step";
  }
};
