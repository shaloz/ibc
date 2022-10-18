import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const Feature = () => {
  const [listingFeature, setListingFeature] = useState([
    {
      text: "Premium Beauty",
      selected: false,
    },
    {
      text: "Professional Skin care",
      selected: false,
    },
    {
      text: "Salon & Spa",
      selected: false,
    },
    {
      text: "Men's Grooming",
      selected: false,
    },
    {
      text: "Health, Household & Baby Care",
      selected: false,
    },
    {
      text: "Health, Household & Baby Care",
      selected: false,
    },
    {
      text: "Gifts",
      selected: false,
    },
  ]);

  const [openListingFeature, setOpenListingFeature] = useState(false);

  const closeListingFeature = () => {
    setOpenListingFeature(false);
  };

  const handleSelect = (index) => {
    let newArray = [...listingFeature];
    if (newArray[index].selected) {
      newArray[index].selected = false;
    } else {
      newArray[index].selected = true;
    }

    setListingFeature(newArray);
  };

  const renderText = () => {
    if (listingFeature.filter((value) => value.selected).length === 0) {
      return "Where would you want us to feature your listings";
    } else {
      const array = listingFeature.filter((result) => {
        if (result.selected) return result.text;
      });

      const newArray = array.map((value) => " " + value.text);
      return newArray.join();
    }
  };

  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: 300 }}>
        <p style={{ fontSize: 17 }}>
          Feature <span style={{ color: "gray" }}>*</span>
        </p>
        <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>
          Feature allows iBeautyConnect to display your product in the feature section something dope.{" "}
        </p>
      </div>
      <div style={{ width: 950, marginLeft: 20 }}>
        {openListingFeature && (
          <div className="feature-listing-menu">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p>Select all that applies</p>
              </div>
              <div>
                <div onClick={closeListingFeature} style={{ cursor: "pointer", marginRight: 10 }}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #dadde1", marginTop: 10, width: 450 }}></div>
            <div style={{ height: 250, overflowY: "auto" }}>
              {listingFeature.map((result, index) => (
                <div style={{ marginTop: 10 }} key={index}>
                  <input
                    type="checkbox"
                    value={result.text}
                    name={result.text}
                    onChange={handleSelect.bind(this, index)}
                    checked={result.selected}
                    style={{ cursor: "pointer" }}
                  />
                  <label style={{ marginLeft: 10, cursor: "pointer" }} onClick={handleSelect.bind(this, index)}>
                    {result.text}
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={closeListingFeature}
              className="done-listing-cat-btn"
              style={{ backgroundColor: listingFeature.filter((value) => value.selected).length === 0 ? "gray" : "#000" }}
              disabled={listingFeature.filter((value) => value.selected).length === 0}
            >
              Done
            </button>
          </div>
        )}
        <div
          style={{
            width: 980,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
            borderRadius: 5,
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => {
            setOpenListingFeature(true);
          }}
        >
          <div style={{ width: 980, padding: 14 }}>
            <p>{renderText()}</p>
          </div>
          <div style={{ height: 28, width: 1, backgroundColor: "#ccc", marginTop: 12, marginLeft: 40 }}></div>
          <div>
            <FontAwesomeIcon icon={faSortDown} style={{ color: "gray", padding: 13, marginRight: 10 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

