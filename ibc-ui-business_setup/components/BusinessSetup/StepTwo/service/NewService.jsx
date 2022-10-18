import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faCircle } from "@fortawesome/free-solid-svg-icons";

const NewService = ({ styles, setNewService }) => {
  const [newCategory, setNewCategory] = useState(false);
  //only professions that were selected
  const professions = [
    {
      text: "Estheticians",
    },
    {
      text: "Aesthetician",
    },
    {
      text: "Fitness trainers",
    },
    {
      text: "Tattoo artists",
    },
    {
      text: "Cosmetologists",
    },
    {
      text: "Chiropractors",
    },
    {
      text: "Barbers",
    },
    {
      text: "Fashion Stylist",
    },
  ];

  let content = null;
  if (newCategory) {
    content = (
      <div>
        <p>
          New service category <span style={{ color: "gray" }}>*</span>
        </p>
        <input
          type="text"
          style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
        />
        <button
          style={{
            backgroundColor: "transparent",
            textDecoration: "underline",
            outline: "none",
            marginRight: 20,
            fontSize: 17,
            cursor: "pointer",
          }}
          onClick={() => {}}
        >
          Save and new
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            textDecoration: "underline",
            outline: "none",
            marginRight: 20,
            fontSize: 17,
            cursor: "pointer",
          }}
          onClick={() => {
            setNewCategory(false);
          }}
        >
          Save and close
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            textDecoration: "underline",
            outline: "none",
            fontSize: 17,
            color: "#E65100",
            cursor: "pointer",
          }}
          onClick={() => {
            setNewCategory(false);
          }}
        >
          Close
        </button>
      </div>
    );
  } else {
    content = (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", width: 880 }}>
          <div style={{ display: "flex" }}>
            <div>
              <p>
                Service category <span style={{ color: "gray" }}>*</span>
              </p>
            </div>
            <div className="tooltip2">
              <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "gray", marginLeft: 5, cursor: "help" }} className="tooltip" />
              <span className="tooltiptext2">
                Service category helps iBeautyConnect group all your services together making it easy for your clients to find what they need.
              </span>
            </div>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "transparent",
                textDecoration: "underline",
                outline: "none",
                marginRight: 20,
                fontSize: 14,
                cursor: "pointer",
              }}
              onClick={() => {
                setNewCategory(true);
              }}
            >
              Add
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                textDecoration: "underline",
                outline: "none",
                fontSize: 14,
                color: "#E65100",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
          </div>
        </div>

        <select id="professionId" name="profession" className={styles.selectStyle_1}>
          <option value="">Select a service category</option>
          <option>Waxing</option>
        </select>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 30 }}>
      <div style={{ marginTop: 30 }}>
        <p style={{ fontSize: 20, marginBottom: 10 }}>Service details</p>
        <div style={{ display: "flex" }}>
          <div>
            <p>
              Profession <span style={{ color: "gray" }}>*</span>
            </p>
          </div>
          <div className="tooltip2">
            <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "gray", marginLeft: 5, cursor: "help" }} className="tooltip" />
            <span className="tooltiptext2">
              iBeautyConnect uses your Profession to group each service to its required profession so your clients can find what they need.
            </span>
          </div>
        </div>
        <select id="professionId" name="profession" className={styles.selectStyle_1}>
          <option value="">Select a profession</option>
          {professions.map((value, index) => (
            <option value={value.text} key={index}>
              {value.text}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: 20 }}>{content}</div>
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: 360 }}>
            <p>
              Service name <span style={{ color: "gray" }}>*</span>
            </p>
            <input
              type="text"
              style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
            />
          </div>
          <div style={{ width: 360 }}>
            <div style={{ display: "flex" }}>
              <div>
                <p>
                  Service price <span style={{ color: "gray" }}>*</span>
                </p>
              </div>
              <div className="tooltip2">
                <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "gray", marginLeft: 5, cursor: "help" }} className="tooltip" />
                <span className="tooltiptext2">
                  The price of your service is displayed in your stores local currency. You configured this in business preferences.
                </span>
              </div>
            </div>
            <input
              type="text"
              style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #dadde1", marginTop: 40, width: 880 }}></div>
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex" }}>
          <div>
            <p style={{ fontSize: 23 }}>Discount</p>
          </div>
          <div className="tooltip2">
            <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "gray", marginLeft: 5, cursor: "help", marginTop: 8 }} className="tooltip" />
            <span className="tooltiptext2">
              Discounts encourage clients to purchase your services. Discounts run from a start date to an end date. iBeautyConnect handles this for
              you.
            </span>
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <p>
            Discount price <span style={{ color: "gray" }}>*</span>
          </p>
          <input
            type="text"
            style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
          <div style={{ width: 360 }}>
            <div style={{ display: "flex" }}>
              <div>
                <p>
                  Start date <span style={{ color: "gray" }}>*</span>
                </p>
              </div>
              <div className="tooltip2">
                <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "gray", marginLeft: 5, cursor: "help" }} className="tooltip" />
                <span className="tooltiptext2">When your discount should start </span>
              </div>
            </div>
            <input
              type="date"
              style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
            />
          </div>
          <div style={{ width: 360 }}>
            <div style={{ display: "flex" }}>
              <div>
                <p>
                  End date <span style={{ color: "gray" }}>*</span>
                </p>
              </div>
              <div className="tooltip2">
                <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "gray", marginLeft: 5, cursor: "help" }} className="tooltip" />
                <span className="tooltiptext2">When your discount has to end </span>
              </div>
            </div>
            <input
              type="date"
              style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #dadde1", marginTop: 40, width: 880 }}></div>
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex" }}>
          <div>
            <p style={{ fontSize: 23 }}>Duration</p>
          </div>
          <div className="tooltip2">
            <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "gray", marginLeft: 5, cursor: "help", marginTop: 8 }} className="tooltip" />
            <span className="tooltiptext2">Let your clients know how long a service takes</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
          <div style={{ width: 360 }}>
            <div>
              <p>
                Hour <span style={{ color: "gray" }}>*</span>
              </p>
            </div>
            <select id="professionId" name="profession" className={styles.selectStyle_2}>
              <option value="">Select</option>
            </select>
          </div>

          <div style={{ width: 360 }}>
            <div>
              <p>
                Minute <span style={{ color: "gray" }}>*</span>
              </p>
            </div>
            <select id="professionId" name="profession" className={styles.selectStyle_2}>
              <option value="">Select</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <button
          onClick={() => {
            setNewService(false);
          }}
          className="newService-btn"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewService;
