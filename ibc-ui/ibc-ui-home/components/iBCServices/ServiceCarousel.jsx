import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ServiceCarousel = ({data, itemDesktop, itemTablet, itemMobile}) => {

 const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemDesktop,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: itemTablet,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: itemMobile,
      partialVisibilityGutter: 30,
    },
  };
  
  return (
    <div>
       {data.map((value, index) => (
        <div key={index} className="lan007">
          <div className="lan008">
            <div>
              <p className="lan009">Explore {value.category}</p>
            </div>
            <div className="lan007">
              <a className="cursor001">View more</a>
            </div>
          </div>
          <div className="lan0010">
            <Carousel ssr={true} partialVisibility itemClass="image-item" responsive={responsive} draggable={false}>
              {value.makeUpArtist.map((result, index) => (
                <div className="cardHover" key={index}>
                  <div>
                    <div className="review">
                      <div className="lan0011">
                        <p className="lan0012">{result.review}</p>
                        <p className="lan0013">{result.totalReviews}</p>
                      </div>
                    </div>
                    <img src={result.image} draggable={false} className="lan0014" />
                  </div>
                  <div>
                    <p>{result.businessName}</p>
                    <div className="lan0015">
                      <p className="lan0016">{result.distanceFrom}</p>
                      <FontAwesomeIcon icon={result.icon} style={{ color: "#767676", fontSize: 5, marginTop: 7, marginLeft: 4, marginRight: 4 }} />
                      <p className="lan0018">{result.businessAddress}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="line001"></div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCarousel;
