import React, { useState } from "react";
import Countries from "./countries";
import { setStorage } from "../../../helpers/localStorage";

const BusinessPreferences = ({ styles, buttons }) => {
  const [shopCountry, setShopCountry] = useState("");
  const handleChange = (e) => {
    setShopCountry(e.target.value);
    setStorage("shopCountry", e.target.value);
  };
  return (
    <div style={{ borderTop: "1px solid #E0E0E0", marginTop: 10 }}>
      <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        <h1 style={{ fontWeight: "400", fontSize: 24 }}>Business Preferences</h1>
        <p style={{ marginTop: 5, fontWeight: "100", fontSize: 14 }}>Let's get started! Tell us about you and your business.</p>
      </div>
      {buttons}
      <div style={{ width: 1200, boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", padding: 20, borderRadius: 3, margin: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginTop: 50, marginLeft: 20 }}>
          <div style={{ width: 500 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 150 }}>
                <p style={{ marginTop: 10, fontSize: 14 }}>
                  Business language <span style={{ color: "gray" }}>*</span>
                </p>
              </div>
              <div style={{ width: 350 }}>
                <select id="shopLanguage" name="shopLanguage" className={styles.selectStyle}>
                  <option value="">Select</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ width: 500 }}>
            <p style={{ fontWeight: "100", color: "#595959", fontSize: 13 }}>
              The default language you'll use to describe your items. Choose carefully! You cannot change this once you save it, but may add other
              languages later.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 20, flexWrap: "wrap", marginTop: 40 }}>
          <div style={{ width: 500 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 150 }}>
                <p style={{ marginTop: 10, fontSize: 14 }}>
                  Business country <span style={{ color: "gray" }}>*</span>
                </p>
              </div>
              <div style={{ width: 350 }}>
                <select id="shopCountry" name="shopCountry" className={styles.selectStyle} onChange={handleChange} value={shopCountry}>
                  <option value="">Select</option>
                  {Countries.map((value, index) => (
                    <option value={value} key={index}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div style={{ width: 500 }}>
            <p style={{ fontWeight: "100", color: "#595959", fontSize: 13 }}>Where is your shop based?</p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginTop: 40, marginBottom: 50, marginLeft: 20 }}>
          <div style={{ width: 500 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 150 }}>
                <p style={{ marginTop: 10, fontSize: 14 }}>
                  Business currency <span style={{ color: "gray" }}>*</span>
                </p>
              </div>
              <div style={{ width: 350 }}>
                <select id="shopCurrency" name="shopCurrency" className={styles.selectStyle}>
                  <option value="">Select</option>
                  <option value="United States">United States</option>
                  <option value="France">France</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ width: 500 }}>
            <p style={{ fontWeight: "100", color: "#595959", fontSize: 13 }}>
              The currency you'll use to price your items. Buyers in other countries will automatically see prices in their local currency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPreferences;
