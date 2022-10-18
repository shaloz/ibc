import React from "react";
import states from "../json/states/united_states.json";
import canada from "../json/states/canada.json";
import { getStorage } from "../../../../../functions/localStorage";


const Address = ({ styles }) => {
  let province_state = null;
  if (getStorage("shopCountry") === "United States") {
    province_state = (
      <div style={{ marginTop: 20 }}>
        <p style={{ fontWeight: "100" }}>State</p>

        <select id="shopState" name="shopState" className={styles.selectStyle_1}>
          <option value="">Select</option>
          {states.map((value, index) => (
            <option value={value.name} key={index}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (getStorage("shopCountry") === "Canada") {
    province_state = (
      <div style={{ marginTop: 20 }}>
        <p style={{ fontWeight: "100" }}>Province</p>
        <select id="shopState" name="shopState" className={styles.selectStyle_1}>
          <option value="">Select</option>
          {canada.map((value, index) => (
            <option value={value.name} key={index}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    province_state = (
      <div style={{ marginTop: 20 }}>
        <p style={{ fontWeight: "100" }}>State / Province / Region</p>
        <input
          type="text"
          style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
        />
      </div>
    );
  }
  return (
    <div>
      <div>
        <p style={{ fontWeight: "100" }}>Street address</p>
        <input
          type="text"
          style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <p style={{ fontWeight: "100" }}>
          Apt / Suite / Other <span style={{ color: "#616161", fontSize: 13 }}>(optional)</span>
        </p>
        <input
          type="text"
          style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
        />
      </div>

      <div style={{ display: "flex", marginTop: 20, justifyContent: "space-between" }}>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>City</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
        <div style={{ width: 360 }}>
          <p style={{ fontWeight: "100" }}>Zip code / Postal code</p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
      </div>
      {province_state}
    </div>
  );
};

export default Address;
