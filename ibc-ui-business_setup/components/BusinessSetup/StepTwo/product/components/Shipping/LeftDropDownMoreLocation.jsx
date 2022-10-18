import React from 'react'
import countries from "../../../../StepOne/countries";

  const LeftDropDownMoreLocation = ({result, shippingProfileIndex, shippingProfiles, setShippingProfiles}) => {
    return (
      <div>
        <select
          id={`moreLocations${shippingProfileIndex}`}
          className="shippingProfile004"
          onChange={(e) => {
            const array = [...shippingProfiles];
            array[shippingProfileIndex].country = e.target.value;
            const newCountryArray = array.map((value) => (value.country !== "" ? value.country : "")).filter((value) => value !== "" && value);
            let leftData = countries.filter((value) => !newCountryArray.includes(value));
            //set new country array for the rest
            for (let i = 0; i < array.length; i++) {
              if (array[i].country === "") {
                array[i].leftData = leftData;
              }
            }
            setShippingProfiles(array);
          }}
        >
          <option value="">Select...</option>
          {result.leftData.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </select>
      </div>
    );
  };

  export default LeftDropDownMoreLocation