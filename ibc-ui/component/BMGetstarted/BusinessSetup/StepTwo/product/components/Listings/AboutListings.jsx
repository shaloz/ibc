import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const AboutListings = () => {
  const [listingCategory, setListingCategory] = useState([
    {
      text: "Health",
      selected: false,
    },
    {
      text: "Beauty",
      selected: false,
    },
    {
      text: "Fashion",
      selected: false,
    },
  ]);

  const [openListingCategory, setOpenListingCategory] = useState(false);

  const closeListingCat = () => {
    setOpenListingCategory(false);
  };

  const handleSelect = (index) => {
    let newArray = [...listingCategory];
    if (newArray[index].selected) {
      newArray[index].selected = false;
    } else {
      newArray[index].selected = true;
    }

    setListingCategory(newArray);
  };

  const renderText = () => {
    if (listingCategory.filter((value) => value.selected).length === 0) {
      return "What category does this listing fall under?";
    } else {
      const array = listingCategory.filter((result) => {
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
          About this listing <span style={{ color: "gray" }}>*</span>
        </p>
        <p style={{ color: "gray", fontWeight: "100", fontSize: 12 }}>Will use this to help customers find your listing</p>
      </div>
      <div style={{ width: 950, marginLeft: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: 400 }}>
            <select id="aboutListing" name="aboutListing" className="aboutListing">
              <option value="">Who made it?</option>
              <option value="i_did">I did</option>
              <option value="someone_else">Another company or person</option>
            </select>
          </div>
          <div style={{ width: 450 }}>
            {openListingCategory && (
              <div className="about-listing-menu">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <p>Select all that applies</p>
                  </div>
                  <div>
                    <div onClick={closeListingCat} style={{ cursor: "pointer", marginRight: 10 }}>
                      <FontAwesomeIcon icon={faTimes} />
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: "1px solid #dadde1", marginTop: 10, width: 450 }}></div>
                {listingCategory.map((result, index) => (
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
                <button
                  onClick={closeListingCat}
                  className="done-listing-cat-btn"
                  style={{ backgroundColor: listingCategory.filter((value) => value.selected).length === 0 ? "gray" : "#000" }}
                  disabled={listingCategory.filter((value) => value.selected).length === 0}
                >
                  Done
                </button>
              </div>
            )}
            <div
              style={{
                width: 480,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
                borderRadius: 5,
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => {
                setOpenListingCategory(true);
              }}
            >
              <div style={{ width: 350, padding: 14 }}>
                <p>{renderText()}</p>
              </div>
              <div style={{ height: 28, width: 1, backgroundColor: "#ccc", marginTop: 12, marginLeft: 40 }}></div>
              <div>
                <FontAwesomeIcon icon={faSortDown} style={{ color: "gray", padding: 13, marginRight: 10 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutListings;
