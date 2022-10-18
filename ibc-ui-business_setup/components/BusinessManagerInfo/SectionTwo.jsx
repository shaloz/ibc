import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import { data, data2 } from "./functions/sectionTwoFxn";

const SectionTwo = () => {
  return (
    <div className="getStartedSectionTwo">
      <div className="bm31">
        <p className="bm32">Simple, transparent, secure</p>
        <div className="bm33">
          <div className="bm34">
            {data.map((result, index) => (
              <div className={result.divClass} key={index}>
                <FontAwesomeIcon icon={faCheck} className="bm36" />
                <span className="bm37">{result.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bm40">
          {data2.map((result, index) => (
            <div className={result.divClass1} key={index}>
              <div className="bm42">
                <div className={result.divClass2}>
                  <div className="bm44">
                    <FontAwesomeIcon icon={result.icon} className={result.iconClass} />
                  </div>
                </div>
                <div>
                  <p className="bm46">{result.headerText}</p>
                  <p className="bm47">
                    {result.subText}{" "}
                    {result.aTagText !== undefined && (
                      <a href="/" style={{ color: "#000", textDecoration: "underline" }}>
                        {result.aTagText}
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bm51">
          <div className="bm42">
            <div className="bm52">
              <FontAwesomeIcon icon={faLock} className="bm53" />
            </div>
            <div>
              <p className="bm54">
                We process payments on our secure, SSL-encrypted platform, and have security specialists and fraud detection systems to protect you
                and your buyers 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
