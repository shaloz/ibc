import React from "react";

const GetStartedHeader = () => {
  return (
    <div>
      <div className="wave-container">
        <h1 className="bm1">Your business in one place!</h1>
        <p>Check out my awesome text here!</p>
        <button className="bm-getStartedButton">Get started</button>
      </div>
      <div className="bm2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#fff"
            d="M41.9,-15.5C51.8,-7,55.6,13.6,47.6,32.5C39.6,51.4,19.8,68.5,7.8,64C-4.2,59.5,-8.4,33.4,-19.9,12.4C-31.5,-8.5,-50.4,-24.3,-48.3,-28.2C-46.2,-32.2,-23.1,-24.3,-3.6,-22.3C16,-20.2,32,-24,41.9,-15.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fillOpacity="1"
          d="M0,32L40,74.7C80,117,160,203,240,245.3C320,288,400,288,
            480,266.7C560,245,640,203,720,181.3C800,160,880,160,960,176C1040,192,
            1120,224,1200,208C1280,192,1360,128,1400,96L1440,64L1440,0L1400,0C1360,0,1280,0,
            1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default GetStartedHeader;
