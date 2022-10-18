const Country = (countryName: string): object => {
  let country = {};
  switch (countryName) {
    case "USA":
      Object.assign(country, {
        name: "United States",
        shortCodeTwoLetters: "US",
        shortCodeThreeLetters: countryName,
        currency: "usd",
        currencySymbol: "$",
        areaCode: "+1",
      });

      break;
    default:
      return {};
  }
  return country;
};

export default Country;
