import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { onHoverEnterIcon, onHoverExistIcon } from "../../../helpers/dom";
import { data, removePrice, showPrice } from "./functions/sectionFourfxn";

const SectionFour = () => {
  return (
    <section className="sectionFour">
      <div className="sectionFourInner">
        <div className="sectionFourInner_left">
          <div className="lan1">
            <div className="lan2">
              <p className="lan3">Editors' Picks</p>
              <p className="lan4">Fashion Wear</p>
              <div
                className="lan5"
                onMouseEnter={onHoverEnterIcon.bind(this, "SectionFiveIcon", 10)}
                onMouseOut={onHoverExistIcon.bind(this, "SectionFiveIcon")}
              >
                <div>
                  <p>See more</p>
                </div>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="iconStyle"
                  id="SectionFiveIcon"
                  onMouseEnter={onHoverEnterIcon.bind(this, "SectionFiveIcon", 10)}
                  onMouseOut={onHoverExistIcon.bind(this, "SectionFiveIcon")}
                />
              </div>
            </div>
            <div className="lan6">
              <div className="lan7">
                {data.slice(0, 2).map((result, index) => (
                  <div
                    key={index}
                    onMouseEnter={showPrice.bind(this, "priceContainerTop", index)}
                    onMouseOut={removePrice.bind(this, "priceContainerTop", index)}
                    className="sectionFourHover lan8"
                  >
                    <div className="priceContainer" id={`priceContainerTop${index}`}>
                      <p className="lan9">${result.price.toFixed(2)}</p>
                    </div>
                    <img src={result.imageUrl} className="lan10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sectionFourInner_left_bottom">
            <div className="lan11">
              {data.slice(1, 5).map((result, index) => (
                <div
                  key={index}
                  onMouseEnter={showPrice.bind(this, "priceContainerLeftBottom", index)}
                  onMouseOut={removePrice.bind(this, "priceContainerLeftBottom", index)}
                  className="sectionFourHover lan12"
                >
                  <div className="priceContainer" id={`priceContainerLeftBottom${index}`}>
                    <p className="lan17">${result.price.toFixed(2)}</p>
                  </div>
                  <img src={result.imageUrl} className="lan13" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sectionFourInner_right">
          {data.slice(0, 1).map((result, index) => (
            <div
              key={index}
              className="lan14"
              onMouseEnter={showPrice.bind(this, "priceContainerRight", index)}
              onMouseOut={removePrice.bind(this, "priceContainerRight", index)}
            >
              <div className="priceContainerRight" id={`priceContainerRight${index}`}>
                <p className="lan15">${result.price.toFixed(2)}</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                className="lan16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFour;

//103
