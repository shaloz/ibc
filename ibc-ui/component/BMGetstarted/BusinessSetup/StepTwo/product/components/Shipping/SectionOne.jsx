import React, { useState } from "react";
import country from "../../../../StepOne/countries";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { handleShippingProfile } from "./shippingProfileLocal";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#000",
    backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#000",
    },
  },
});

const SectionOne = ({
  customRangeRadio,
  setCustomRangeRadio,
  customTo,
  setCustomTo,
  customFrom,
  setCustomFrom,
  processingTime,
  setProcessingTime,
  countryOfOrigin,
  setCountryOfOrigin,
  setShippingProfiles,
  shippingProfiles,
  setShippingUpgrade,
}) => {
  function StyledRadio(props) {
    const classes = useStyles();

    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

  const processingTimeArray = [
    {
      value: 1,
      text: "1 business day",
    },
    {
      value: 2,
      text: "1-2 business days",
    },
    {
      value: 3,
      text: "1-3 business days",
    },
    {
      value: 4,
      text: "3-5 business days",
    },
    {
      value: 5,
      text: "1-2 weeks",
    },
    {
      value: 6,
      text: "2-3 weeks",
    },
    {
      value: 7,
      text: "3-4 weeks",
    },
    {
      value: 8,
      text: "4-6 weeks",
    },
    {
      value: 9,
      text: "6-8 weeks",
    },
  ];

  const renderCustomRange = () => {
    const array = [...Array(11).keys()].slice(1);
    return array.map((value) => (
      <option value={value} key={value}>
        {value}
      </option>
    ));
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: 20 }}>
        <div style={{ width: 300 }}>
          <p>
            Country of origin <span style={{ color: "gray" }}>*</span>
          </p>
          <p style={{ color: "#616161", fontSize: 12 }}>The country you're shipping from</p>
        </div>
        <div style={{ width: 500 }}>
          <select
            id="countryOrigin"
            name="countryOrigin"
            className="shippingSelection001"
            onChange={(e) => {
              setCountryOfOrigin(e.target.value);
              setShippingUpgrade([]);
              handleShippingProfile(e.target.value, shippingProfiles, setShippingProfiles);
            }}
            value={countryOfOrigin}
          >
            <option value="">Select a location</option>
            {country.map((result, index) => (
              <option value={result} key={index}>
                {result}
              </option>
            ))}
          </select>
        </div>
      </div>
      {countryOfOrigin === "United States" && (
        <div style={{ display: "flex", marginBottom: 20 }}>
          <div style={{ width: 300 }}>
            <p>
              Origin zip code <span style={{ color: "gray" }}>*</span>
            </p>
            <p style={{ color: "#616161", fontSize: 12 }}>Where do you ship packages from?</p>
          </div>
          <div style={{ width: 500 }}>
            <input
              type="text"
              style={{ border: "1px solid #dddfe2", fontSize: 17, padding: 15, borderRadius: 5, outline: "none", height: 20, width: 200 }}
              placeholder="12394"
            />
          </div>
        </div>
      )}

      <div style={{ display: "flex", marginBottom: 20 }}>
        <div style={{ width: 300 }}>
          <p>
            Processing time <span style={{ color: "gray" }}>*</span>
          </p>
          <div style={{ width: 250 }}>
            <p style={{ color: "#616161", fontSize: 12 }}>
              Once a buyer has placed their order, how long does it take you to prepare, package, and put it in the mail?{" "}
              <a href="/" style={{ color: "#000", textDecoration: "underline" }}>
                Learn how this affects your "ship by" date.
              </a>
            </p>
          </div>
        </div>
        <div style={{ width: 500 }}>
          <select
            id="processingTime"
            name="processingTime"
            className="shippingSelection001"
            onChange={(e) => {
              setProcessingTime(e.target.value);
            }}
            value={processingTime}
          >
            <option value="">Select your processing time...</option>
            {processingTimeArray.map((result, index) => (
              <option value={result.value} key={index}>
                {result.text}
              </option>
            ))}
            <option value="custom_range">Custom range</option>
            <option value="unknown">Unknown</option>
          </select>
          {processingTime === "custom_range" && (
            <div>
              {" "}
              <div style={{ display: "flex", marginTop: 10, marginBottom: 5 }}>
                <div>
                  <select
                    id="customRange"
                    name="customRange"
                    className="shippingSelection002"
                    onChange={(e) => {
                      setCustomFrom(e.target.value);
                    }}
                    value={customFrom}
                  >
                    <option value="">From...</option>
                    {renderCustomRange()}
                  </select>
                </div>
                <div style={{ marginLeft: 20, marginRight: 20, fontSize: 20, marginTop: 15 }}>-</div>
                <div>
                  <select
                    id="customRange"
                    name="customRange"
                    className="shippingSelection002"
                    onChange={(e) => {
                      setCustomTo(e.target.value);
                    }}
                    value={customTo}
                  >
                    <option value="">To...</option>
                    {renderCustomRange()}
                  </select>
                </div>
              </div>
              <RadioGroup
                defaultValue="business days"
                name="custom-radio"
                onChange={(e) => {
                  setCustomRangeRadio(e.target.value);
                }}
              >
                <div style={{ display: "flex", marginLeft: 2 }}>
                  <FormControlLabel value="business days" control={<StyledRadio />} label="Business days" />
                  <FormControlLabel value="weeks" control={<StyledRadio />} label="Weeks" />
                </div>
              </RadioGroup>
            </div>
          )}
          <div style={{ marginTop: 5 }}>
            <p>
              {processingTime === "unknown"
                ? "Are you sure? Processing times help shoppers decide to buy."
                : "Buyers are more likely to purchase items that ship quickly"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
