import React, { useState } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const ShippingRightContainer = () => {
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [processingTime, setProcessingTime] = useState("");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const [customRangeRadio, setCustomRangeRadio] = useState("");
  const [shippingProfiles, setShippingProfiles] = useState([]);
  const [shippingUpgrade, setShippingUpgrade] = useState([]);

  const handleSaveShippingProfile = () => {
    alert("handleSaveShippingProfile");
  };
  return (
    <div>
      <div style={{ width: 800 }}>
        <p style={{ fontWeight: "100" }}>
          Fill out your shipping options for this listing. You can keep these options specific to this listing, or save them as a shipping profile to
          apply them to future listings.
        </p>
      </div>
      <div style={{ marginTop: 20 }}>
        <SectionOne
          countryOfOrigin={countryOfOrigin}
          setCountryOfOrigin={setCountryOfOrigin}
          processingTime={processingTime}
          setProcessingTime={setProcessingTime}
          customFrom={customFrom}
          setCustomFrom={setCustomFrom}
          customTo={customTo}
          setCustomTo={setCustomTo}
          customRangeRadio={customRangeRadio}
          setCustomRangeRadio={setCustomRangeRadio}
          setShippingProfiles={setShippingProfiles}
          shippingProfiles={shippingProfiles}
          setShippingUpgrade={setShippingUpgrade}
        />
      </div>
      <div style={{ marginTop: 30 }}>
        <SectionTwo
          shippingProfiles={shippingProfiles}
          setShippingProfiles={setShippingProfiles}
          shippingUpgrade={shippingUpgrade}
          setShippingUpgrade={setShippingUpgrade}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontWeight: "100", fontSize: 15, marginTop: 10 }}>
              You can save these options to apply to future listings, if you'd like.{" "}
              <a href="/" style={{ color: "#000", textDecoration: "underline" }}>
                How shipping profiles work
              </a>
            </p>
          </div>
          <div>
            <button onClick={handleSaveShippingProfile} className="saveShippingProfile-btn">
              Save as a shipping profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingRightContainer;
