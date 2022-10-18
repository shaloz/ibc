import React from "react";
import ServiceCarousel from "../../iBCServices/ServiceCarousel";

import { data } from "./functions/sectionThreefnx";
const SectionThree = () => {
  return (
    <section className="sectionThree">
      <ServiceCarousel data={data} itemDesktop={4} itemTablet={2} itemMobile={1} />
    </section>
  );
};

export default SectionThree;
