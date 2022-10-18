import React, { useState } from "react";
import Price from "./InventoryPrice/Price";
import Quantity from "./InventoryPrice/Quantity";
 

const InventoryPrice = ({}) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Price />
        <Quantity />
      </div>
    </div>
  );
};

export default InventoryPrice;
