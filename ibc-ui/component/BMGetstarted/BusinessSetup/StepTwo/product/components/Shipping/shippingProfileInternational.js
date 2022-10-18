import { handleCarrierOther, handleCarrier } from "./shippingCarrier";

export const handleMoreLocation = (shippingProfiles, setShippingProfiles) => {
  const array = [...shippingProfiles];
  const value = array[0].country;
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

      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, false);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, false);

      return;
    case "Italy":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
      return;
    case "Greece":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, false);
      return;
    case "Norway":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
      return;
    case "Finland":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, false);
      return;
    case "Netherlands":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
      return;
    case "Mexico":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, false);
      return;
    case "Switzerland":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
      return;
    case "Sweden":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
      return;
    case "Sweden":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, false);
      return;
    case "Denmark":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
      return;
    case "Czech Republic":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, false);
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
      handleCarrier(array, setShippingProfiles, value, range, shippingCarrier, mailClass, false);
      return;
    case "Austria":
      handleCarrierOther(array, setShippingProfiles, value, range, false);
      return;
    default:
      return "None";
  }
};
