import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CustomCheckbox = withStyles({
  root: {
    color: "#000",
    "&$checked": {
      color: "#000",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const PersonalizationComponent = () => {
  const [isOptional, setIsOptional] = useState(false);
  const [text, setText] = useState("");
  const handleChange = () => {
    setIsOptional(!isOptional);
  };
  return (
    <div style={{ border: "1px solid #ccc", width: 1300, marginTop: 20 }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: 600, padding: 20 }}>
          <p>Instructions for buyers</p>
          <p style={{ color: "#616161", fontWeight: "100", fontSize: 12 }}>Enter the personalization instructions you want buyers to see.</p>
          <textarea
            style={{
              outline: "none",
              resize: "none",
              border: "1px solid #ccc",
              borderRadius: 5,
              width: 570,
              marginTop: 10,
              height: 150,
              padding: 10,
              fontFamily: "Poppins, sans-serif",
            }}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Example: Enter the name you want on the necklace. Max 12 characters, no spaces, no special characters. Thank you!"
          ></textarea>
          <div>
            <FormControlLabel
              control={<CustomCheckbox checked={isOptional} onChange={handleChange} name="checkedG" />}
              label="Personalization is optional"
            />
          </div>
        </div>
        <div style={{ width: 619, borderLeft: "1px solid #ccc", padding: 20, backgroundColor: "#F5F5F5" }}>
          <div style={{ textAlign: "center" }}>
            <p>What the buyer will see</p>
          </div>
          <div style={{ width: 400, margin: "auto", backgroundColor: "#fff", padding: 10, borderRadius: 5, marginTop: 10 }}>
            <p style={{ fontSize: 14 }}>Add your personalization</p>
            <p style={{ fontSize: 15, fontWeight: "100" }}>{text === "" ? "See item description for details" : text}</p>
            <textarea
              style={{
                outline: "none",
                resize: "none",
                border: "1px solid #ccc",
                borderRadius: 5,
                width: 370,
                marginTop: 10,
                height: 50,
                padding: 10,
                fontFamily: "Poppins, sans-serif",
              }}
              disabled
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationComponent;
