import React, { useState } from "react";

const WorkSchedule = ({ button }) => {
  const [workSchedule, setWorkSchedule] = useState([
    {
      name: "monday",
      startTime: "",
      endTime: "",
    },
    {
      name: "tuesday",
      startTime: "",
      endTime: "",
    },
    {
      name: "wednesday",
      startTime: "",
      endTime: "",
    },
    {
      name: "thursday",
      startTime: "",
      endTime: "",
    },

    {
      name: "friday",
      startTime: "",
      endTime: "",
    },
    {
      name: "saturday",
      startTime: "",
      endTime: "",
    },
    {
      name: "sunday",
      startTime: "",
      endTime: "",
    },
  ]);
  return (
    <div style={{ marginBottom: 30 }}>
      <p>Let your clients know when your available.</p>
      {workSchedule.map((value, index) => (
        <div style={{ marginTop: 20 }} key={index}>
          <p style={{ fontSize: 20, textTransform: "capitalize" }}>{value.name}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: 360 }}>
              <p style={{ fontWeight: "100" }}>Start time</p>
              <input
                type="text"
                name={value.name}
                style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
              />
            </div>
            <div style={{ width: 360 }}>
              <p style={{ fontWeight: "100" }}>End time</p>
              <input
                type="text"
                style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
              />
            </div>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 30 }}>{button}</div>
    </div>
  );
};

export default WorkSchedule;
