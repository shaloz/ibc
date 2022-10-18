import React from "react";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";

const LoggedOut = ({ styles }) => {
  return (
    <section style={{ width: 1480, margin: "auto" }}>
      <SectionTwo styles={styles} />
      <SectionThree styles={styles} />
      <SectionFour styles={styles} />
      <SectionFive styles={styles} />
      <SectionSix styles={styles} />
      <SectionSeven styles={styles} />
    </section>
  );
};

export default LoggedOut;
