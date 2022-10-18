export const handleFilter = (value, shippingProfiles, setShippingProfiles, shippingProfileIndex) => {
  const array = [...shippingProfiles];
  let mailClass = [];
  switch (value) {
    case "1":
      //USPS
      if (array[shippingProfileIndex].isLocal) {
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
        array[shippingProfileIndex].mailClass = mailClass;
        setShippingProfiles(array);
      } else {
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
        array[shippingProfileIndex].mailClass = mailClass;
        setShippingProfiles(array);
      }
      return;
    case "2":
      //FedEx
      if (array[shippingProfileIndex].isLocal) {
        mailClass = [
          {
            value: "smart_post",
            text: "FedEx SmartPost®",
          },
          {
            value: "priority_overnight",
            text: "FedEx Priority Overnight®",
          },
          {
            value: "standard_overnight",
            text: "FedEx Standard Overnight®",
          },
          {
            value: "two_day_am",
            text: "FedEx 2Day® AM",
          },
          {
            value: "two_day",
            text: "FedEx 2Day®",
          },
          {
            value: "express_saver",
            text: "FedEx Express Saver®",
          },
          {
            value: "ground",
            text: "FedEx Ground®",
          },
          {
            value: "home_delivery",
            text: "FedEx Home Delivery®",
          },
        ];
        array[shippingProfileIndex].mailClass = mailClass;
        setShippingProfiles(array);
      } else {
        mailClass = [
          {
            value: "international_first",
            text: "FedEx International First®",
          },
          {
            value: "international_priority",
            text: "FedEx International Priority®",
          },

          {
            value: "international_economy",
            text: "FedEx International Economy®",
          },

          {
            value: "international_ground",
            text: "FedEx International Ground®",
          },

          {
            value: "first_overnight",
            text: "FedEx First Overnight®",
          },
        ];
        array[shippingProfileIndex].mailClass = mailClass;
        setShippingProfiles(array);
      }
      return;

    case "3":
      //UPS
      if (array[shippingProfileIndex].isLocal) {
        mailClass = [
          {
            value: "next_day_air",
            text: "UPS Next Day Air",
          },
          {
            value: "two_day",
            text: "UPS Two Day",
          },
          {
            value: "ground",
            text: "UPS Ground",
          },
          {
            value: "express",
            text: "UPS Express",
          },
          {
            value: "expedited",
            text: "UPS Expedited",
          },
          {
            value: "three_day_select",
            text: "UPS Three Day Select",
          },
          {
            value: "next_day_air_saver",
            text: "UPS Next Day Air Saver",
          },
          {
            value: "second_day_air_am",
            text: "UPS 2nd Day Air AM",
          },
        ];
        array[shippingProfileIndex].mailClass = mailClass;
        setShippingProfiles(array);
      } else {
        mailClass = [
          {
            value: "international_standard",
            text: "UPS International Standard",
          },
          {
            value: "worldwide_expedited",
            text: "UPS Worldwide Expedited",
          },
          {
            value: "worldwide_saver",
            text: "UPS Worldwide Saver",
          },
          {
            value: "worldwide_express",
            text: "UPS Worldwide Express",
          },
          {
            value: "worldwide_express_na1",
            text: "UPS Worldwide Express NA1",
          },
        ];
        array[shippingProfileIndex].mailClass = mailClass;
        setShippingProfiles(array);
      }
      return;

    case "100":
      //DHL
      mailClass = [
        {
          value: "express_9_00",
          text: "DHL EXPRESS 9:00",
        },
        {
          value: "express_10_30",
          text: "DHL EXPRESS 10:00",
        },
        {
          value: "express_12_00",
          text: "DHL EXPRESS 12:00",
        },
        {
          value: "express_worldwide",
          text: "DHL EXPRESS WORLDWIDE",
        },
        {
          value: "express_envelope",
          text: "DHL EXPRESS ENVELOPE",
        },
      ];
      array[shippingProfileIndex].mailClass = mailClass;
      setShippingProfiles(array);
      return;
    case "31":
      //Royal Mail
      if (array[shippingProfileIndex].isLocal) {
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
        array[shippingProfileIndex].mailClass = mailClass;
        setShippingProfiles(array);
      } else {
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
        array[shippingProfileIndex].mailClass = mailClass;
        setShippingProfiles(array);
      }
      return;
    case "42":
      //Hermes UK
      mailClass = [
        {
          value: "parcel_shop",
          text: "Parcel Shop",
        },
      ];
      array[shippingProfileIndex].mailClass = mailClass;
      setShippingProfiles(array);
      return;
    case "323":
      //Collect+
      mailClass = [
        {
          value: "collect_plus",
          text: "Collect+",
        },
        {
          value: "collect_plus_economy",
          text: "Collect+ Economy",
        },
      ];
      array[shippingProfileIndex].mailClass = mailClass;
      setShippingProfiles(array);
      return;
    case "13":
      //Hermes
      if (array[shippingProfileIndex].isLocal) {
        mailClass = [
          {
            value: "domestic",
            text: "Domestic",
          },
        ];
      } else {
        mailClass = [
          {
            value: "international",
            text: "International",
          },
        ];
      }
      array[shippingProfileIndex].mailClass = mailClass;
      setShippingProfiles(array);
      return;
    case "19":
      //La Poste
      if (array[shippingProfileIndex].isLocal) {
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
      } else {
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
      }
      array[shippingProfileIndex].mailClass = mailClass;
      setShippingProfiles(array);
      return;

    case "15":
      //Correos - Espana
      if (array[shippingProfileIndex].isLocal) {
        mailClass = [
          {
            value: "domestic_paq_standard",
            text: "Correos – Domestic Paq Standard",
          },
        ];
      } else {
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
      }
      array[shippingProfileIndex].mailClass = mailClass;
      setShippingProfiles(array);
      return;
    case "29":
      //Poczta Polska
      if (array[shippingProfileIndex].isLocal) {
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
      } else {
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
      }
      array[shippingProfileIndex].mailClass = mailClass;
      setShippingProfiles(array);
      return;

    case "60":
      //Canada Post
      if (array[shippingProfileIndex].isLocal) {
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
      } else {
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
      }

      array[shippingProfileIndex].mailClass = mailClass;
      setShippingProfiles(array);
      return;
    case "86":
      //Australia Post
      if (array[shippingProfileIndex].isLocal) {
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
      } else {
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
      }
      array[shippingProfileIndex].mailClass = mailClass;
      setShippingProfiles(array);
      return;
    default:
      return;
  }
};
