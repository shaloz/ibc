import React from "react";
import data from "./functions/sectionOneFxn";

const SectionOne = () => {
  return (
    <section className="getStartedSectionOne">
      <div className="bm3">
        <p className="bm4">
          Join the creative marketplace where millions of shoppers spend billions each year purchasing directly from creative entrepreneurs like you.
        </p>
      </div>
      <div className="bm5">
        {data.map((result, index) => (
          <div className="bm6" key={index}>
            <img src={result.src} className="bm7" />
            <p>{result.header}</p>
            <div className="bm8">
              <p className="bm9">{result.subText}</p>
              <a className="bm10" href="/">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="bm11">
        <div className="bm12">
          <img src="/image/icon4.svg" className="bm13" />
        </div>
        <div className="bm14">
          <div className="bm15">
            <p className="bm16">Start Selling today</p>
            <button className="btn100">Open your iBC Business</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
