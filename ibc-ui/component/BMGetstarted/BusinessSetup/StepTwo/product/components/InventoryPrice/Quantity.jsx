import React, { useState } from "react";

const Quantity = () => {
  const [qty, setQty] = useState(1);
  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: 300 }}>
        <p style={{ fontSize: 17 }}>
          Quantity <span style={{ color: "gray" }}>*</span>
        </p>
      </div>
      <div style={{ width: 950, marginLeft: 20, marginTop: 5 }}>
        <div style={{ width: 400 }}>
          <input
            type="text"
            style={{
              border: "1px solid #dddfe2",
              fontSize: 17,
              marginTop: 3,
              padding: 15,
              borderRadius: 5,
              outline: "none",
              height: 20,
              width: 300,
            }}
            value={qty}
            onChange={(e) => {
              setQty(e.target.value);
            }}
          />
        </div>
        <p style={{ color: "red" }}>Please enter a quantity.</p>
      </div>
    </div>
  );
};

export default Quantity;
