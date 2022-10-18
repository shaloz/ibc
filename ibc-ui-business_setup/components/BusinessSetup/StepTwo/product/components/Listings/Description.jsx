import React from "react";

const Description = () => {
  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: 300 }}>
        <p style={{ fontSize: 17 }}>
          Description <span style={{ color: "gray" }}>*</span>
        </p>
        <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>
          Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at
          first, so make it count!
        </p>
        <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>
          Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.
        </p>
      </div>
      <div style={{ width: 950, marginLeft: 20 }}>
        <textarea
          style={{
            border: "1px solid #dddfe2",
            fontSize: 17,
            marginTop: 3,
            padding: 15,
            borderRadius: 5,
            outline: "none",
            height: 200,
            width: "100%",
            resize:"none"
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default Description;
