import React from "react";

const Tittle = () => {
  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: 300 }}>
        <p style={{ fontSize: 17 }}>
          Title <span style={{ color: "gray" }}>*</span>
        </p>
        <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>Include keywords that buyers would use to search for your item.</p>
      </div>
      <div style={{ width: 950, marginLeft: 20 }}>
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
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Tittle;
