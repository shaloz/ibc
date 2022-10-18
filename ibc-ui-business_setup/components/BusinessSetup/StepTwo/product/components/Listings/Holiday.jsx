import React from "react";

const Holiday = () => {
  const holiday = [""];

  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: 300 }}>
        <p style={{ fontSize: 17 }}>
          Holiday <span style={{ color: "gray", fontSize: 11 }}>Optional</span>
        </p>
        <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>
          Add to items meant specifically for a holiday, for example a Mother’s Day card, not for items that could be gifted for a holiday. You can
          skip this attribute if it isn’t relevant.
        </p>
      </div>
      <div style={{ width: 950, marginLeft: 20 }}>
        <div style={{ width: 350 }}>
          <select id="occasion" name="occasion" className="m-dropdown">
            <option value="">Select a holiday</option>
            <optgroup label="Holiday options">
              <option value="35">Christmas</option>
              <option value="36">Cinco de Mayo</option>
              <option value="37">Easter</option>
              <option value="39">Halloween</option>
              <option value="40">Hanukkah</option>
              <option value="41">Independence Day</option>
              <option value="42">Kwanzaa</option>
              <option value="34">Lunar New Year</option>
              <option value="44">New Year's</option>
              <option value="47">Passover</option>
              <option value="45">St Patrick's Day</option>
              <option value="46">Thanksgiving</option>
              <option value="48">Valentine's Day</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Holiday;
