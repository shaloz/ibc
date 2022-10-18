import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { handleMoreLocation } from "./shippingProfileInternational";
import { handleFilter } from "./filterCarrier";
import countries from "../../../../StepOne/countries";
import { handleShippingUpgrade } from "./shippingUpgrade";
import ShippingUpgrade from "./ShippingUpgrade.jsx";
import RenderLeftDropDown from "./LeftDropDownMoreLocation";

const SectionTwo = ({ shippingProfiles, setShippingProfiles, shippingUpgrade, setShippingUpgrade }) => {
  const deliveryRange = (result, shippingProfileIndex) => {
    return (
      <div>
        <p>
          Delivery time <span style={{ marginLeft: 7, fontWeight: "100", color: "#616161", fontSize: 12 }}>Business days</span>
        </p>
        <div style={{ display: "flex" }}>
          <div>
            <select
              id="deliveryFrom"
              name="deliveryFrom"
              className="shippingProfile003"
              onChange={(e) => {
                const array = [...shippingProfiles];
                const value = parseInt(e.target.value);
                const range = [];
                for (let i = 1; i < 22; i++) {
                  range.push({ number: i, isSelected: false });
                }
                const toArray = range.slice(value - 1);

                array[shippingProfileIndex].deliveryTime.to = toArray;
                setShippingProfiles(array);
              }}
            >
              <option value="">Select from...</option>
              {result.deliveryTime.from.map((data, index) => (
                <option value={data.number} key={index}>
                  {data.number}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginLeft: 20, marginRight: 20, marginTop: 13 }}>
            <p>-</p>
          </div>
          <div>
            <select id="deliveryTo" name="deliveryTo" className="shippingProfile003">
              <option value="">Select to...</option>
              {result.deliveryTime.to.map((data, index) => (
                <option value={data.number} key={index}>
                  {data.number}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  };

  const otherDeliveryRange = (result, shippingProfileIndex) => {
    return (
      <div>
        <p>
          Delivery time <span style={{ marginLeft: 7, fontWeight: "100", color: "#616161", fontSize: 12 }}>Business days</span>
        </p>
        <div style={{ display: "flex" }}>
          <div>
            <select
              id="deliveryFrom"
              name="deliveryFrom"
              className="shippingProfile003"
              onChange={(e) => {
                const array = [...shippingProfiles];
                const value = parseInt(e.target.value);
                const range = [];
                for (let i = 1; i < 22; i++) {
                  range.push({ number: i, isSelected: false });
                }
                const toArray = range.slice(value - 1);
                array[shippingProfileIndex].other.deliveryTime.to = toArray;
                setShippingProfiles(array);
              }}
            >
              <option value="">Select from...</option>
              {result.other.deliveryTime.from.map((data, index) => (
                <option value={data.number} key={index}>
                  {data.number}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginLeft: 20, marginRight: 20, marginTop: 13 }}>
            <p>-</p>
          </div>
          <div>
            <select id="deliveryTo" name="deliveryTo" className="shippingProfile003">
              <option value="">Select to...</option>
              {result.other.deliveryTime.to.map((data, index) => (
                <option value={data.number} key={index}>
                  {data.number}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  };

  const toolTip = (
    <div className="tooltip2">
      <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "gray", marginLeft: 5, cursor: "help" }} className="tooltip" />
      <span className="tooltiptext2">
        This information will be used to calculate an Estimated Delivery Date, which will be shown to shoppers as a way to help them get an idea of
        when their package will arrive (which means less convos).{" "}
      </span>
    </div>
  );

  const mailCarrier = (result, shippingProfileIndex) => {
    return (
      <div>
        {result.other.isSelected ? (
          otherDeliveryRange(result, shippingProfileIndex)
        ) : (
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <p style={{ fontWeight: "500" }}>Mail class</p>
              </div>
              {toolTip}
            </div>
            <select id="mailClass" name="mailClass" className="shippingProfile002">
              {result.mailClass.map((data, shippingCarrierIndex) => (
                <option value={data.value} key={shippingCarrierIndex}>
                  {data.text}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  };

  const Charge = (result, shippingProfileIndex, text) => {
    return (
      <div>
        <p style={{ fontWeight: "500" }}>{text}</p>
        <div style={{ display: "flex" }}>
          <div
            style={{
              borderLeft: "1px solid #dddfe2",
              borderTop: "1px solid #dddfe2",
              borderBottom: "1px solid #dddfe2",
              width: 30,
              height: 30,
              padding: 10,
              marginTop: 3,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            <p style={{ marginTop: 3 }}>{result.charge.currency}</p>
          </div>
          <div>
            <input
              type="text"
              style={{
                borderTop: "1px solid #dddfe2",
                borderBottom: "1px solid #dddfe2",
                borderRight: "1px solid #dddfe2",
                fontSize: 17,
                marginTop: 3,
                padding: 15,
                borderRadius: 5,
                outline: "none",
                height: 20,
                width: 120,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                marginRight: 20,
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  const handleCharge = (e, shippingProfileIndex) => {
    const value = e.target.value;
    const array = [...shippingProfiles];
    if (value === "fixed") {
      array[shippingProfileIndex].fixedSelected = true;
      console.log(array);

      setShippingProfiles(array);
    } else {
      array[shippingProfileIndex].fixedSelected = false;
      setShippingProfiles(array);
    }
    return;
  };

  return (
    <div>
      <div style={{ width: 300 }}>
        <p>
          Fixed shipping prices <span style={{ color: "gray" }}>*</span>
        </p>
        <p style={{ color: "#616161", fontSize: 12 }}>Only shoppers in countries you ship to will see your listings in search.</p>
      </div>
      <div style={{ marginTop: 20, marginBottom: 30 }}>
        <p style={{ fontWeight: "100" }}>Standard shipping</p>
      </div>
      {shippingProfiles.map((result, shippingProfileIndex) => (
        <div style={{ display: "flex", marginBottom: 30 }} key={shippingProfileIndex}>
          <div style={{ width: 250, marginRight: 20 }}>
            {result.country === "" ? (
              <RenderLeftDropDown
                result={result}
                shippingProfileIndex={shippingProfileIndex}
                shippingProfiles={shippingProfiles}
                setShippingProfiles={setShippingProfiles}
              />
            ) : (
              <p style={{ fontWeight: "500" }}>{result.country}</p>
            )}
          </div>
          <div style={{ width: 1000, display: "flex" }}>
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <p style={{ fontWeight: "500" }}>Shipping Carrier</p>
                    </div>
                    {toolTip}
                  </div>
                  <select
                    id="shipmentCarrier"
                    name="shipmentCarrier"
                    className="shippingProfile001"
                    onChange={(e) => {
                      const array = [...shippingProfiles];
                      if (e.target.value === "0") {
                        array[shippingProfileIndex].other.isSelected = true;
                      } else {
                        array[shippingProfileIndex].other.isSelected = false;
                        handleFilter(e.target.value, shippingProfiles, setShippingProfiles, shippingProfileIndex);
                      }
                      setShippingProfiles(array);
                    }}
                  >
                    {result.shippingCarrier.map((data, shippingCarrierIndex) => (
                      <option value={data.value} key={shippingCarrierIndex}>
                        {data.text}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ marginLeft: 30 }}>
                  {result.mailClass === undefined ? deliveryRange(result, shippingProfileIndex) : mailCarrier(result, shippingProfileIndex)}
                </div>
              </div>
              <div style={{ display: "flex", marginTop: 10 }}>
                <div>
                  <p style={{ fontWeight: "500" }}>What you'll charge</p>
                  <select
                    id="charge"
                    name="charge"
                    className="shippingProfile001"
                    onChange={(e) => {
                      handleCharge(e, shippingProfileIndex);
                    }}
                  >
                    <option value="">Select...</option>
                    {result.charge.dropDown.map((data, chargeIndex) => (
                      <option value={data.value} key={chargeIndex}>
                        {data.text}
                      </option>
                    ))}
                  </select>
                </div>
                {result.fixedSelected && (
                  <div style={{ marginLeft: 30 }}>
                    <div style={{ display: "flex" }}>
                      {Charge(result, shippingProfileIndex, "One item")}
                      {Charge(result, shippingProfileIndex, "Additional item")}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {result.hasDelete && (
              <div style={{ marginLeft: 10 }}>
                <div style={{ marginTop: 39 }}>
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const array = [...shippingProfiles];
                      array.splice(shippingProfileIndex, 1);
                      setShippingProfiles(array);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      {shippingProfiles.length !== 0 && (
        <div>
          <div
            style={{
              marginTop: 20,
              marginTop: 30,
              borderTop: "1px solid #E0E0E0",
              borderBottom: "1px solid #E0E0E0",
              paddingBottom: 20,
              paddingTop: 20,
            }}
          >
            <button className="add-another-locationBtn" onClick={handleMoreLocation.bind(this, shippingProfiles, setShippingProfiles)}>
              <FontAwesomeIcon icon={faPlus} /> Add another location
            </button>
          </div>
          <ShippingUpgrade shippingUpgrade={shippingUpgrade} setShippingUpgrade={setShippingUpgrade} shippingProfiles={shippingProfiles} />
          <div
            style={{
              marginTop: 20,
              marginTop: 30,
              borderBottom: "1px solid #E0E0E0",
              paddingBottom: 20,
            }}
          >
            <button
              className="add-another-locationBtn"
              onClick={handleShippingUpgrade.bind(this, shippingProfiles, shippingUpgrade, setShippingUpgrade)}
            >
              <FontAwesomeIcon icon={faPlus} /> Add a shipping upgrade
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(SectionTwo);
