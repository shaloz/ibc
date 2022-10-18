import countries from "../../../../StepOne/countries";

const charge = {
  dropDown: [
    {
      value: "fixed",
      text: "Fixed Price",
    },
    {
      value: "free",
      text: "Free shipping",
    },
  ],
  oneItem: 0.0,
  additionItem: 0.0,
  currency: "USD",
};

export const handleCarrierOther = (array, setShippingProfiles, value, range, isLocal) => {
  if (isLocal) {
    const obj = {
      isLocal: true,
      hasDelete: false,
    };
    array = [];
    array.unshift({
      ...obj,
      country: value,
      fixedSelected: false,
      hasErrors: false,
      shippingCarrier: [
        {
          value: 0,
          text: "Other",
        },
      ],
      deliveryTime: {
        from: range,
        to: range,
      },
      charge,
    });
  } else {
    const newCountryArray = array.map((value) => (value.country !== "" ? value.country : "")).filter((value) => value !== "" && value);

    let leftData = countries.filter((value) => !newCountryArray.includes(value));
    const obj = {
      isLocal: false,
      hasDelete: true,
    };
    array.push({
      ...obj,
      country: "",
      fixedSelected: false,
      hasErrors: false,
      leftData,
      shippingCarrier: [
        {
          value: 0,
          text: "Other",
        },
      ],
      deliveryTime: {
        from: range,
        to: range,
      },
      charge,
    });
  }
  setShippingProfiles(array);
};

export const handleCarrier = (array, setShippingProfiles, value, range, shippingCarrier, mailClass, isLocal) => {
  if (isLocal) {
    const obj = {
      isLocal: true,
      hasDelete: false,
    };
    array = [];
    array.unshift({
      ...obj,
      country: value,
      shippingCarrier,
      fixedSelected: false,
      hasErrors: false,
      other: {
        deliveryTime: {
          from: range,
          to: range,
        },
        isSelected: false,
      },
      mailClass,
      charge,
    });
  } else {
    const newCountryArray = array.map((value) => (value.country !== "" ? value.country : "")).filter((value) => value !== "" && value);
    let leftData = countries.filter((value) => !newCountryArray.includes(value));
    const obj = {
      isLocal: false,
      hasDelete: true,
    };
    array.push({
      ...obj,
      country: "",
      fixedSelected: false,
      hasErrors: false,
      leftData,
      shippingCarrier,
      other: {
        deliveryTime: {
          from: range,
          to: range,
        },
        isSelected: false,
      },
      mailClass,
      charge,
    });
  }
  setShippingProfiles(array);
};
