import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faTrash, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { handleFilter } from "./filterCarrierShippingUpgrade";
import { handleNewShippingCarrierInternational, handleNewShippingCarrierDomestic } from "./shippingUpgrade2";

const ShippingUpgrade = ({ shippingUpgrade, setShippingUpgrade, shippingProfiles }) => {
  const deliveryRange = (result, shippingUpgradeIndex) => {
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
                const array = [...shippingUpgrade];
                const value = parseInt(e.target.value);
                const range = [];
                for (let i = 1; i < 22; i++) {
                  range.push({ number: i, isSelected: false });
                }
                const toArray = range.slice(value - 1);

                array[shippingUpgradeIndex].deliveryTime.to = toArray;
                setShippingUpgrade(array);
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

  const otherDeliveryRange = (result, shippingUpgradeIndex) => {
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
                const array = [...shippingUpgrade];
                const value = parseInt(e.target.value);
                const range = [];
                for (let i = 1; i < 22; i++) {
                  range.push({ number: i, isSelected: false });
                }
                const toArray = range.slice(value - 1);
                array[shippingUpgradeIndex].other.deliveryTime.to = toArray;
                setShippingUpgrade(array);
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

  const mailCarrier = (result, shippingUpgradeIndex) => {
    return (
      <div>
        {result.other.isSelected ? (
          otherDeliveryRange(result, shippingUpgradeIndex)
        ) : (
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <p style={{ fontWeight: "500" }}>Mail class</p>
              </div>
              {toolTip}
            </div>
            <select id="mailClass" name="mailClass" className="shippingProfile008">
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

  const toolTip = (
    <div className="tooltip2">
      <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "gray", marginLeft: 5, cursor: "help" }} className="tooltip" />
      <span className="tooltiptext2">
        This information will be used to calculate an Estimated Delivery Date, which will be shown to shoppers as a way to help them get an idea of
        when their package will arrive (which means less convos).{" "}
      </span>
    </div>
  );

  const toolTip2 = (
    <div className="tooltip2">
      <FontAwesomeIcon icon={faQuestionCircle} style={{ color: "gray", marginLeft: 5, cursor: "help" }} className="tooltip" />
      <span className="tooltiptext2">This is for a shipping upgrade, which is a price added in addition to your standard shipping price.</span>
    </div>
  );

  const renderLeftDropDown = (result, shippingUpgradeIndex) => {
    return (
      <div>
        <p style={{ fontWeight: "500" }}>Destination</p>
        <select
          id={`shippingUpgrade${shippingUpgradeIndex}`}
          className="shippingProfile006"
          onChange={(e) => {
            const array = [...shippingUpgrade];
            if (e.target.value === "domestic") {
              array[shippingUpgradeIndex].isLocal = true;
              handleNewShippingCarrierDomestic(shippingUpgrade, setShippingUpgrade, shippingProfiles, shippingUpgradeIndex);
            } else {
              array[shippingUpgradeIndex].isLocal = false;

              handleNewShippingCarrierInternational(shippingUpgrade, setShippingUpgrade, shippingProfiles, shippingUpgradeIndex);
            }

            setShippingUpgrade(array);
          }}
        >
          {result.destination.map((data, index) => (
            <option value={data.value} key={index}>
              {data.text}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderDeliveryType = (result, shippingUpgradeIndex) => {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <p style={{ fontWeight: "500" }}>Name</p>
          </div>
          {toolTip}
        </div>

        <div style={{display: "flex"}}>
        {!result.deliveryTypeIsCustom ? (
             <div>
              <select
                id={`deliveryType${shippingUpgradeIndex}`}
                className="shippingProfile005"
                onChange={(e) => {
                 if(e.target.value === "Custom") {
                  const array = [...shippingUpgrade];
                  array[shippingUpgradeIndex].deliveryTypeIsCustom = true;
                  setShippingUpgrade(array);
                 }
                }}
              >
                {result.deliveryType.map((data, index) => (
                  <option value={data.value} key={index}>
                    {data.text}
                  </option>
                ))}
              </select>
            </div>
         
        ) : (
          <div style={{ display: "flex" }}>
            <div>
              <input
                type="text"
                style={{
                  borderTop: "1px solid #dddfe2",
                  borderBottom: "1px solid #dddfe2",
                  borderLeft: "1px solid #dddfe2",
                  fontSize: 17,
                  marginTop: 3,
                  padding: 15,
                  borderRadius: 5,
                  outline: "none",
                  height: 20,
                  width: 590,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              />
            </div>
            <div
              style={{
                borderRight: "1px solid #dddfe2",
                borderTop: "1px solid #dddfe2",
                borderBottom: "1px solid #dddfe2",
                width: 30,
                height: 30,
                padding: 10,
                marginTop: 3,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
             <FontAwesomeIcon icon={faTimes} style={{marginTop:5, cursor:"pointer"}} onClick={() => {
                const array = [...shippingUpgrade];
                array[shippingUpgradeIndex].deliveryTypeIsCustom = false;
                setShippingUpgrade(array);
             }}/>
            </div>
          </div>
        )}
        <div style={{ marginLeft: 20 }}>
              <div style={{ marginTop: 15 }}>
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    const array = [...shippingUpgrade];
                    array.splice(shippingUpgradeIndex, 1);
                    setShippingUpgrade(array);
                  }}
                />
              </div>
            </div>
        </div>
      </div>
    );
  };
  const Charge = (result, shippingUpgradeIndex, text, width) => {
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
            <p style={{ marginTop: 3 }}>{result.currency}</p>
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
                width: width,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                marginRight: 30,
              }}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div style={{ marginTop: 20 }}>
      {shippingUpgrade.map((result, shippingUpgradeIndex) => (
        <div style={{ display: "flex", marginBottom: 30 }} key={shippingUpgradeIndex}>
          <div style={{ width: 250, marginRight: 100 }}>{renderLeftDropDown(result, shippingUpgradeIndex)}</div>
          <div style={{ width: 1000 }}>
            {renderDeliveryType(result, shippingUpgradeIndex)}
            <div style={{ display: "flex", marginTop: 20 }}>
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
                  className="shippingProfile007"
                  onChange={(e) => {
                    const array = [...shippingUpgrade];
                    if (e.target.value === "0") {
                      array[shippingUpgradeIndex].other.isSelected = true;
                    } else {
                      array[shippingUpgradeIndex].other.isSelected = false;
                      handleFilter(e.target.value, shippingUpgrade, setShippingUpgrade, shippingUpgradeIndex);
                    }
                    setShippingUpgrade(array);
                  }}
                >
                  {result.shippingCarrier.map((data, shippingCarrierIndex) => (
                    <option value={data.value} key={shippingCarrierIndex}>
                      {data.text}
                    </option>
                  ))}
                </select>
              </div>
              <div>{result.mailClass === undefined ? deliveryRange(result, shippingUpgradeIndex) : mailCarrier(result, shippingUpgradeIndex)}</div>
            </div>
            <div style={{ display: "flex", marginTop: 20 }}>
              {Charge(result, shippingUpgradeIndex, "One item", 220)}
              {Charge(result, shippingUpgradeIndex, "Additional item", 300)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShippingUpgrade;
