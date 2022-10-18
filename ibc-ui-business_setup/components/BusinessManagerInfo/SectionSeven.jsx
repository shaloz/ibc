import React from "react";
import data from "./functions/sectionSevenFxn";

const SectionSeven = () => {
  return (
    <div className="getStartedSectionSeven">
      <div className="bm77">
        <div className="bm67">
          <p className="bm78">What can you sell on iBeautyConnect</p>
          <div className="bm79">
            {data.map((result, index) => (
              <div className="bm80" key={index}>
                <div className="bm81">
                  {result.images.map((img, index) => (
                    <img src={img.src} className={img.class} key={index} />
                  ))}
                </div>
                <div className="bm85">
                  <p>{result.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bm86">
          <p>iBeautyConnect is a marketplace where millions of people people people people people people people people people</p>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
