const destination = [
  {
    value: "domestic",
    text: "Domestic",
  },
  {
    value: "international",
    text: "International",
  },
];
const deliveryType = [
  {
    value: "Express",
    text: "Express",
  },
  {
    value: "1 Day",
    text: "1 Day",
  },
  {
    value: "Economy",
    text: "Economy",
  },
  {
    value: "Custom",
    text: "Custom",
  },
];

const handleCarrierOther = (array, setShippingUpgrade, range) => {
  array.push({
    destination,
    deliveryType,
    deliveryTypeIsCustom: false,
    isLocal: true,
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
    hasErrors: false,
    oneItem: {
      value: 0,
      hasError: false,
    },
    additionalItem: 0,
    currency: "USD",
  });
  setShippingUpgrade(array);
};

export const handleCarrier = (array, setShippingUpgrade, range, shippingCarrier, mailClass) => {
  array.push({
    destination,
    deliveryType,
    deliveryTypeIsCustom: false,
    isLocal: true,
    shippingCarrier,
    hasErrors: false,
    other: {
      deliveryTime: {
        from: range,
        to: range,
      },
      isSelected: false,
    },
    mailClass,
    oneItem: {
      value: 0,
      hasError: false,
    },
    additionalItem: 0,
    currency: "USD",
  });

  setShippingUpgrade(array);
};

export const handleShippingUpgrade = (shippingProfiles, shippingUpgrade, setShippingUpgrade) => {
  const value = shippingProfiles[0].country;
  const array = [...shippingUpgrade];
  const range = [];
  for (let i = 1; i < 22; i++) {
    range.push({ number: i, isSelected: false });
  }

  let shippingCarrier = [];
  let mailClass = [];
  switch (value) {
    case "United States":
      shippingCarrier = [
        {
          value: 1,
          text: "USPS",
        },
        {
          value: 2,
          text: "FedEx",
        },
        {
          value: 3,
          text: "UPS",
        },
        {
          value: 0,
          text: "Other",
        },
      ];

      mailClass = [
        {
          value: "priority_express",
          text: "USPS Priority Mail Express",
        },
        {
          value: "priority",
          text: "USPS Priority Mail",
        },
        {
          value: "first_class",
          text: "USPS First Class Mail",
        },
        {
          value: "media_mail",
          text: "USPS Media Mail",
        },
        {
          value: "parcel_select",
          text: "USPS Parcel Select Ground",
        },
      ];

      handleCarrier(array, setShippingUpgrade, range, shippingCarrier, mailClass);
      return;
    case "United Kingdom":
      shippingCarrier = [
        {
          value: 31,
          text: "Royal Mail",
        },
        {
          value: 42,
          text: "Hermes UK",
        },
        {
          value: 323,
          text: "Collect+",
        },
        {
          value: 0,
          text: "Other",
        },
      ];

      mailClass = [
        {
          value: "first_class",
          text: "Royal Mail 1st Class",
        },
        {
          value: "second_class",
          text: "Royal Mail 2nd Class",
        },
        {
          value: "special_delivery_guaranteed",
          text: "Royal Mail Special Delivery Guaranteed by 1pm",
        },
      ];
      handleCarrier(array, setShippingUpgrade, range, shippingCarrier, mailClass);

      return;
    case "Italy":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Greece":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Germany":
      shippingCarrier = [
        {
          value: 13,
          text: "Hermes",
        },
        {
          value: 0,
          text: "Other",
        },
      ];

      mailClass = [
        {
          value: "hermes",
          text: "Domestic",
        },
      ];
      handleCarrier(array, setShippingUpgrade, range, shippingCarrier, mailClass);
      return;
    case "Norway":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Finland":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Cyprus":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "France":
      shippingCarrier = [
        {
          value: 19,
          text: "La Poste",
        },
        {
          value: 0,
          text: "Other",
        },
      ];

      mailClass = [
        {
          value: "domestic_colissimo",
          text: "La Poste – Domestic Colissimo",
        },
        {
          value: "domestic_chronopost",
          text: "La Poste – Domestic Chronopost",
        },
      ];
      handleCarrier(array, setShippingUpgrade, range, shippingCarrier, mailClass);
      return;
    case "Netherlands":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Mexico":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Spain":
      shippingCarrier = [
        {
          value: 15,
          text: "Correos - Espana",
        },
        {
          value: 0,
          text: "Other",
        },
      ];

      mailClass = [
        {
          value: "domestic_paq_standard",
          text: "Correos – Domestic Paq Standard",
        },
      ];
      handleCarrier(array, setShippingUpgrade, range, shippingCarrier, mailClass);
      return;
    case "Switzerland":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Sweden":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Sweden":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Poland":
      shippingCarrier = [
        {
          value: 29,
          text: "Poczta Polska",
        },
        {
          value: 0,
          text: "Other",
        },
      ];

      mailClass = [
        {
          value: "domestic_pocztex_express_24",
          text: "Domestic - Pocztex Express 24",
        },
        {
          value: "domestic_pocztex_courier_48",
          text: "Domestic - Pocztex Courier 48",
        },
        {
          value: "domestic_city_courier",
          text: "Domestic - City Courier",
        },
        {
          value: "domestic_courier",
          text: "Domestic - Domestic Courier",
        },
        {
          value: "domestic_direct_courier",
          text: "Domestic - Direct Courier",
        },
        {
          value: "domestic_parcel24",
          text: "Domestic - Parcel24",
        },
        {
          value: "domestic_parcel48",
          text: "Domestic - Parcel48",
        },
        {
          value: "domestic_palett_shipment",
          text: "Domestic - Palett Shipment",
        },
      ];
      handleCarrier(array, setShippingUpgrade, range, shippingCarrier, mailClass);
      return;
    case "Denmark":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Czech Republic":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    case "Canada":
      shippingCarrier = [
        {
          value: 60,
          text: "Canada Post",
        },
        {
          value: 0,
          text: "Other",
        },
      ];

      mailClass = [
        {
          value: "priority",
          text: "Priority™",
        },
        {
          value: "xpresspost",
          text: "Xpresspost™",
        },
        {
          value: "expedited_parcel",
          text: "Expedited Parcel™",
        },
        {
          value: "regular_parcel",
          text: "Regular Parcel™",
        },
      ];
      handleCarrier(array, setShippingUpgrade, range, shippingCarrier, mailClass);
      return;
    case "Australia":
      shippingCarrier = [
        {
          value: 86,
          text: "Australia Post",
        },
        {
          value: 0,
          text: "Other",
        },
      ];

      mailClass = [
        {
          value: "courier_post",
          text: "Australia Post Courier Post",
        },
        {
          value: "express_post",
          text: "Australia Post Express Post",
        },
        {
          value: "parcel_post",
          text: "Australia Post Parcel Post",
        },
      ];
      handleCarrier(array, setShippingUpgrade, range, shippingCarrier, mailClass);
      return;
    case "Austria":
      handleCarrierOther(array, setShippingUpgrade, range);
      return;
    default:
      return "None";
  }
};
