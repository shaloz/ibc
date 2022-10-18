import React from "react";

const Price = () => {
  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: 300 }}>
        <p style={{ fontSize: 17 }}>
          Price <span style={{ color: "gray" }}>*</span>
        </p>
        <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>
          Remember to factor in the costs of materials, labor, and other business expenses. If you offer free shipping, make sure to include the cost
          of shipping so it doesn't eat into your profits.
        </p>
      </div>
      <div style={{ width: 950, marginLeft: 20, marginTop: 5 }}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              borderLeft: "1px solid #dddfe2",
              borderTop: "1px solid #dddfe2",
              borderBottom: "1px solid #dddfe2",
              width: 40,
              height: 30,
              padding: 10,
              marginTop: 3,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            <p style={{ marginTop: 3 }}>USD</p>
          </div>
          <div style={{ width: 400 }}>
            <input
              type="text"
              style={{
                borderTop: "1px solid #dddfe2",
                borderBottom: "1px solid #dddfe2",
                borderRight: "1px solid #dddfe2",
                fontSize: 17,
                marginTop: 3,
                padding: 15,
                borderRadius: 5,
                outline: "none",
                height: 20,
                width: 400,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            />
          </div>
        </div>
        <p style={{ color: "red" }}>Price must be between AU$0.27 and AU$68,352.70.</p>
      </div>
    </div>
  );
};

export default Price;
