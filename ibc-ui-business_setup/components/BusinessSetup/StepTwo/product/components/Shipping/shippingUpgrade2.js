const handleCarrierOther = (array, setShippingUpgrade, range) => {
    // array.push({
      
    //    shippingCarrier: [
    //     {
    //       value: 0,
    //       text: "Other",
    //     },
    //   ],
    //   deliveryTime: {
    //     from: range,
    //     to: range,
    //   },
    //    oneItem: {
    //     value: 0,
    //     hasError: false,
    //   },
    //   additionalItem: 0,
    //   currency: "USD",
    // });
    // setShippingUpgrade(array);
    console.log(array);
  };
export const handleNewShippingCarrierInternational = (shippingUpgrade, setShippingUpgrade, shippingProfiles, shippingUpgradeIndex) => {
  const array = [...shippingUpgrade];
  const value = shippingProfiles[0].country;
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
          value: 100,
          text: "DHL Express",
        },
        {
          value: 0,
          text: "Other",
        },
      ];

      mailClass = [
        {
          value: "priority_express_international",
          text: "USPS Priority Mail Express International",
        },
        {
          value: "priority_international",
          text: "USPS Priority Mail International",
        },
      ];

      array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
      array[shippingUpgradeIndex].mailClass = mailClass
      setShippingUpgrade(array);
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
          value: 0,
          text: "Other",
        },
      ];

      mailClass = [
        {
          value: "international_tracked_and_signed",
          text: "Royal Mail International Tracked & Signed",
        },
        {
          value: "international_standard",
          text: "Royal Mail International Standard",
        },
      ];
      array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
      array[shippingUpgradeIndex].mailClass = mailClass
      setShippingUpgrade(array);

      return;
    case "Italy":
      handleCarrierOther(array, setShippingUpgrade, value, range, false);
      return;
    case "Greece":
      handleCarrierOther(array, setShippingUpgrade, value, range, false);
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
          value: "international",
          text: "International",
        },
      ];
      array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
      array[shippingUpgradeIndex].mailClass = mailClass
      setShippingUpgrade(array);
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
          value: "international_eu",
          text: "La Poste – International EU",
        },
        {
          value: "international_us",
          text: "La Poste – International US",
        },
        {
          value: "international_row",
          text: "La Poste – International ROW",
        },
      ];
      array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
      array[shippingUpgradeIndex].mailClass = mailClass
      setShippingUpgrade(array);
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
          value: "international_paq_light_eu",
          text: "Correos – International Paq Light EU",
        },
        {
          value: "international_paq_light_row",
          text: "Correos – International Paq Light ROW",
        },
      ];
      array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
      array[shippingUpgradeIndex].mailClass = mailClass
      setShippingUpgrade(array);
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
          value: "international_global_expres_EU",
          text: "International - Global Expres EU",
        },
        {
          value: "international_global_expres_ROW",
          text: "International - Global Expres ROW",
        },
      ];
      array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
      array[shippingUpgradeIndex].mailClass = mailClass
      setShippingUpgrade(array);
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
          value: "xpresspost_international",
          text: "Xpresspost™ - International",
        },
        {
          value: "international_parcel_air",
          text: "International Parcel Air",
        },
        {
          value: "international_parcel_surface",
          text: "International Parcel Surface",
        },
        {
          value: "small_packet_international_air",
          text: "Small Packet™ - International Air",
        },
        {
          value: "small_packet_international_surface",
          text: "Small Packet™ - International Surface",
        },
        {
          value: "tracked_packet_international",
          text: "Tracked Packet™ - International",
        },
        {
          value: "light_packet_international",
          text: "Light Packet™ - International",
        },
        {
          value: "xpresspost_usa",
          text: "Xpresspost™ - USA",
        },
        {
          value: "expedited_parcel_usa",
          text: "Expedited Parcel™ - USA",
        },
        {
          value: "small_packet_usa",
          text: "Small Packet™ - USA Air",
        },
        {
          value: "tracked_packet_usa",
          text: "Tracked Packet™ - USA",
        },
        {
          value: "light_packet_usa",
          text: "Light Packet™ - USA",
        },
      ];
      array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
      array[shippingUpgradeIndex].mailClass = mailClass
      setShippingUpgrade(array);
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
          value: "international_economy",
          text: "Australia Post International Post Economy Air",
        },
        {
          value: "international_standard",
          text: "Australia Post International Post Standard",
        },
        {
          value: "international_express",
          text: "Australia Post International Post Express",
        },
      ];
      array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
      array[shippingUpgradeIndex].mailClass = mailClass
      setShippingUpgrade(array);
      return;
    case "Austria":
        handleCarrierOther(array, setShippingUpgrade, range);
      return;
    default:
      return "None";
  }
};


export const handleNewShippingCarrierDomestic = (shippingUpgrade, setShippingUpgrade, shippingProfiles, shippingUpgradeIndex) => {
    const array = [...shippingUpgrade];
    const value = shippingProfiles[0].country;
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
  
        array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
        array[shippingUpgradeIndex].mailClass = mailClass
        setShippingUpgrade(array);
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
        array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
        array[shippingUpgradeIndex].mailClass = mailClass
        setShippingUpgrade(array);
  
        return;
      case "Italy":
        handleCarrierOther(array, setShippingUpgrade, value, range, false);
        return;
      case "Greece":
        handleCarrierOther(array, setShippingUpgrade, value, range, false);
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
        array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
        array[shippingUpgradeIndex].mailClass = mailClass
        setShippingUpgrade(array);
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
        array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
        array[shippingUpgradeIndex].mailClass = mailClass
        setShippingUpgrade(array);
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
        array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
        array[shippingUpgradeIndex].mailClass = mailClass
        setShippingUpgrade(array);
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
        array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
        array[shippingUpgradeIndex].mailClass = mailClass
        setShippingUpgrade(array);
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
        array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
        array[shippingUpgradeIndex].mailClass = mailClass
        setShippingUpgrade(array);
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
        array[shippingUpgradeIndex].shippingCarrier = shippingCarrier;
        array[shippingUpgradeIndex].mailClass = mailClass
        setShippingUpgrade(array);
        return;
      case "Austria":
          handleCarrierOther(array, setShippingUpgrade, range);
        return;
      default:
        return "None";
    }
  };
  
