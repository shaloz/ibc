import React from "react";
import ShippingRightContainer from "./Shipping/ShippingRightContainer";

const Shipping = () => {
  return (
    <div style={{ marginBottom: 20, marginTop: 30 }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: 150, marginRight: 30 }}>
          <p>
            Shipping options <span style={{ color: "gray" }}>*</span>
          </p>
        </div>
        <div style={{ width: 1120, boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", borderRadius: 3 }}>
          <div style={{ borderBottom: "1px solid #dadde1", marginTop: 35, width: 1120 }}></div>
          <div style={{ padding: 20 }}>
            <ShippingRightContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
