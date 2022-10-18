import React, { useState } from "react";
import PersonalizationComponent from "./Personalization/PersonalizationComponent";

const Personalization = () => {
  const [displayView, setDisplayView] = useState(false);
  return (
    <div style={{ marginBottom: 30 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <div>
          <p> Collect personalized information for this listing.</p>
        </div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => {
                let newDisplay = !displayView;
                setDisplayView(newDisplay);
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      {displayView && <PersonalizationComponent />}
    </div>
  );
};

export default Personalization;
