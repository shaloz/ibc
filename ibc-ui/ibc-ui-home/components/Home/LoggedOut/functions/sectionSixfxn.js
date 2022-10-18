export const mockProducts = [
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage:
        "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
    {
      productImage: "https://edited.beautybay.com/wp-content/uploads/2019/01/38a34bdc-1f29-11e9-863f-d633afdb47d2.jpg",
      discount: 10,
      productName: "Product Product",
      businessName: "@businessName",
      shippingOption: "OFFERS FREE pickup",
      productPrice: 1000,
    },
  ];

  export const convertPrice = (productPrice, discount) => {
    if (discount === 0) {
      const price = productPrice / 100;
      return price.toFixed(2);
    } else {
      const price = productPrice / 100 - (productPrice * (discount / 100)) / 100;
      return price.toFixed(2);
    }
  };
