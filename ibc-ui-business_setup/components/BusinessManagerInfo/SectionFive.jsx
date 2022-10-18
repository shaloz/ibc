import React from "react";
import data from "./functions/sectionFiveFxn";

const SectionFive = () => {
  return (
    <div className="getStartedSectionFive">
      <div className="bm17">
        <div className="bm18">
          <p className="bm19">Here’s what you’ll find in iBeautyConnect Plus</p>
        </div>
        <div className="bm20">
          {data.map((result, index) => (
            <div className="bm21" key={index}>
              <div className="bm22">
                <div className="bm23">
                  <svg className="plus_feature__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path fill="#E7E7E8" d={result.svgPath1}></path>
                    <path fill="#222" d={result.svgPath2}></path>
                    {result.svgPath3 !== undefined && <path fill="#222" d={result.svgPath3}></path>}
                  </svg>
                </div>
                <div className="bm24">
                  <div>
                    <p className="bm25">{result.headerText}</p>
                  </div>
                  <div className="bm26">
                    <p className="bm27">{result.subText}</p>
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

export default SectionFive;
