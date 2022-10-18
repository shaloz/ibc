import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { section2Data } from "./functions/sectionTwofxn";

const SectionTwo = () => {
  return (
    <section className="section2">
      <div className="section2Inner">
        <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
          <FontAwesomeIcon icon={faLightbulb} className="section2_tag" />
          <span className="section2_tag">Buy</span>
          <span>Sell</span>
        </span>
        <h2>What is iBeautyConnect</h2>
      </div>
      <div className="lan001">
        <div className="lan002">
          {section2Data.map((result, index) => (
            <div className="imageBox" key={index}>
              <div className="lan003">
                <div className="lan004">
                  <FontAwesomeIcon icon={result.icon} style={result.sectionStyle} />
                  <p className="lan005">{result.header}</p>
                  <p className="lan006">{result.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
