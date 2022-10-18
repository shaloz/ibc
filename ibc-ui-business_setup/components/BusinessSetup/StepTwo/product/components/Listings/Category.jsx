import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: 300 }}>
        <p style={{ fontSize: 17 }}>
          Category <span style={{ color: "gray" }}>*</span>
        </p>
        <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>
          Categories help shoppers to easily find your items. Shoppers will find your items in the categories selected
        </p>
      </div>
      <div style={{ width: 980, marginLeft: 20, display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: 300 }}>
          <select id="listingCategory" name="listingCategory" className="listingCategory">
            <option value="">Select a listing category</option>
            <option value="beauty_personal_care">Beauty & Personal Care</option>
            <option value="health_household">Health & Household</option>
            <option value="fashion">Fashion</option>
          </select>
        </div>
        <div style={{ width: 315, display: "flex" }}>
          <div
            style={{
              border: "1px solid #dddfe2",
              height: 22,
              padding: 14,
              borderRadius: 5,
              marginTop: 3,
              borderRight: "none",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: 10,
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div>
            <input
              type="text"
              style={{
                border: "1px solid #dddfe2",
                borderLeft: "none",
                fontSize: 17,
                marginTop: 3,
                padding: 15,
                borderRadius: 5,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                outline: "none",
                height: 20,
                width: 246,
              }}
              placeholder="Category two"
            />
          </div>
        </div>
        <div style={{ width: 315, display: "flex" }}>
          <div
            style={{
              border: "1px solid #dddfe2",
              height: 22,
              padding: 14,
              borderRadius: 5,
              marginTop: 3,
              borderRight: "none",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: 10,
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div>
            <input
              type="text"
              style={{
                border: "1px solid #dddfe2",
                borderLeft: "none",
                fontSize: 17,
                marginTop: 3,
                padding: 15,
                borderRadius: 5,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                outline: "none",
                height: 20,
                width: 246,
              }}
              placeholder="Category three"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
