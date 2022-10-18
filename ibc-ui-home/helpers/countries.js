const countries = (countryName) => {
  let country = {};

  switch (countryName) {
    case "United States":
      country.name = countryName;
      country.shortCode = "USA";
      country.currency = "usd";
      country.currencySymbol = "$";
      country.areaCode = "+1";
      break;
    default:
      return {};
  }
  return country;
};

export default countries;
