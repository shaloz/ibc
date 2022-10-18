import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { productManager } from "../stepTwo";
const steps = [
  { title: "Photos", sub: "Add as many as you can so buyers can see every detail." },
  { title: "Listing details", sub: "Tell the world all about your item and why they’ll love it." },
  { title: "Inventory and pricing", sub: "" },
  { title: "variations", sub: "Variations helps buyers to buy your item with options" },
  { title: "Personalization", sub: "" },
  { title: "Shipping", sub: "Set clear and realistic shipping expectations for shoppers by providing accurate processing time." },
];

const ProductListingComponent = ({ render, styles, setRender }) => {
  const [activeStepInner, setActiveStepInner] = useState(3);
  const handleBackInner = () => {
    setActiveStepInner((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNextInner = () => {
    setActiveStepInner((prevActiveStep) => prevActiveStep + 1);
  };

  const handleDoneInner = () => {
    alert("done");
  };

  let content = null;

  const button = (
    <div style={{ display: "flex", width: 1300, justifyContent: "flex-end", marginBottom: 10 }}>
      <button
        disabled={activeStepInner === 0}
        onClick={handleBackInner}
        style={{ cursor: "pointer", marginRight: 20, fontSize: 17, backgroundColor: "transparent", outline: "none" }}
      >
        Previous
      </button>
      {activeStepInner === steps.length - 1 ? (
        <button onClick={handleDoneInner} className={styles.nextButton}>
          Save and Continue
        </button>
      ) : (
        <button onClick={handleNextInner} className={styles.nextButton}>
          Next
        </button>
      )}
    </div>
  );

  if (render === "newListing") {
    content = (
      <div>
        <h2 style={{ textAlign: "center", fontWeight: "100" }}>New product</h2>
        <div style={{ boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", padding: 20, borderRadius: 3, marginTop: 20 }}>
          <button
            onClick={() => {
              setRender("productListings");
            }}
            style={{ cursor: "pointer", marginRight: 20, fontSize: 19, backgroundColor: "transparent", outline: "none", cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faLongArrowAltLeft} style={{ marginRight: 5 }} />
            Back
          </button>
          <div>
            <p style={{ fontSize: 25 }}>
              ({activeStepInner + 1}/{steps.length}) {steps[activeStepInner].title}
            </p>
            <p style={{ color: "gray", fontWeight: "100", fontSize: 14 }}>{steps[activeStepInner].sub}</p>
          </div>
          {productManager(activeStepInner, styles)}
          {button}
        </div>
      </div>
    );
  } else {
    content = <h2 style={{ textAlign: "center", fontWeight: "100" }}>Product name goes here</h2>;
  }
  return <div style={{ padding: 10 }}>{content}</div>;
};

export default ProductListingComponent;
