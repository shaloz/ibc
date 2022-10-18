import { handleCarrierOther, handleCarrier } from "./shippingCarrier";

export const handleShippingProfile = (value, shippingProfiles, setShippingProfiles) => {
  const array = [...shippingProfiles];
  const range = [];
  for (let i = 1; i < 22; i++) {
    range.push({ number: i, isSelected: false });
  }

  let shippingCarrier = [];
  let mailClass = [];

  //remove other isLocal
  const isLocalIndex = array.findIndex((value) => value.isLocal);
  array.splice(isLocalIndex, 1);
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

      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, true);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, true);

      return;
    case "Italy":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
      return;
    case "Greece":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, true);
      return;
    case "Norway":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
      return;
    case "Finland":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
      return;
    case "Cyprus":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, true);
      return;
    case "Netherlands":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
      return;
    case "Mexico":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, true);
      return;
    case "Switzerland":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
      return;
    case "Sweden":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
      return;
    case "Sweden":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, true);
      return;
    case "Denmark":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
      return;
    case "Czech Republic":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, true);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, true);
      return;
    case "Austria":
      handleCarrierOther(array, setShippingProfiles, value, range, true);
      return;
    default:
      return "None";
  }
};
