import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { data } from "./functions/sectionFivefxn";
const SectionFive = () => {
  return (
    <section className="sectionFive">
      <div className="section2Inner">
        <h2>Browse our Professions Catalog</h2>
      </div>
      <div className="lan18">
        {data.map((result, index) => (
          <div key={index} className="sectionFiveCards">
            <div className="lan19">
              <img src={result.image} className="lan20" />
            </div>
            <div className="lan21">
              <div className="lan22">
                <div>
                  <p>{result.categoryText}</p>
                </div>
                <div>
                  <span className="lan23">Browse</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
              <div className="lan24">
                {result.category.map((value, index) => (
                  <div className="lan25" key={index}>
                    <p className="lan26">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="lan27">
        <button className="sectionFive_viewMoreBtn">View all</button>
      </div>
    </section>
  );
};

export default SectionFive;
