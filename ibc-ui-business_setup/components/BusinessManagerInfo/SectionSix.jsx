import React from "react";
import data from "./functions/sectionSixFnx";

const SectionSix = () => {
  return (
    <div className="getStartedSectionSix">
      <div className="bm66">
        <div className="bm67">
          <p className="bm68">Help when you need it</p>
          <div className="bm69">
            <p className="bm70">We’re committed to helping our 1.8 million sellers thrive, with support and education for shops big and small.</p>
          </div>
        </div>
        <div className="bm20">
          {data.map((result, index) => (
            <div className="bm71" key={index}>
              <div className="bm72">
                <div className="bm73">
                  <img src={result.src} width="110" alt="" />
                </div>
                <div className="bm74">
                  <div>
                    <p className="bm75">{result.headerText}</p>
                  </div>
                  <div className="bm76">
                    <p className="bm70">{result.subText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
