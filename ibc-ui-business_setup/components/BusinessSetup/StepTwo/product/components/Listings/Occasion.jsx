import React from "react";

const Occasion = () => {
  const occasionData = [""];
  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: 300 }}>
        <p style={{ fontSize: 17 }}>
          Occasion <span style={{ color: "gray", fontSize: 11 }}>Optional</span>
        </p>
        <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>
          Add to items designed for the occasion, for example graduation party decor, not for items that could be gifted for an occasion. You can skip
          this attribute if it isn’t relevant.
        </p>
      </div>
      <div style={{ width: 950, marginLeft: 20 }}>
        <div style={{ width: 350 }}>
          <select id="occasion" name="occasion" className="m-dropdown">
            <option value="">Select an occasion</option>
            <optgroup label="Occasion options">
              <option value="2773">1st birthday</option>
              <option value="12">Anniversary</option>
              <option value="13">Baby shower</option>
              <option value="14">Bachelor party</option>
              <option value="15">Bachelorette party</option>
              <option value="16">Back to school</option>
              <option value="17">Baptism</option>
              <option value="18">Bar &amp; Bat Mitzvah</option>
              <option value="19">Birthday</option>
              <option value="20">Bridal shower</option>
              <option value="21">Confirmation</option>
              <option value="26">Divorce &amp; breakup</option>
              <option value="22">Engagement</option>
              <option value="23">First Communion</option>
              <option value="24">Graduation</option>
              <option value="25">Grief &amp; mourning</option>
              <option value="27">Housewarming</option>
              <option value="2774">LGBTQ pride</option>
              <option value="50">Moving</option>
              <option value="28">Pet loss</option>
              <option value="29">Prom</option>
              <option value="30">Quinceañera &amp; Sweet 16</option>
              <option value="31">Retirement</option>
              <option value="32">Wedding</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Occasion;
