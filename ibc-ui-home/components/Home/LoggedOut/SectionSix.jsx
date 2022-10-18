import React from "react";
import { mockProducts, convertPrice } from "./functions/sectionSixfxn";

const SectionSix = () => {
  return (
    <section className="sectionSix">
      <div className="lan28">
        <p className="lan29">Hand picked products for you</p>
        <div className="lan30">
          <a className="lan31">View more</a>
        </div>
      </div>
      <div className="productContainer">
        {mockProducts.map((result, index) => (
          <div className="productCard" key={index}>
            <div className="productCard1">
              <img src={result.productImage} className="productCardImage" />
            </div>
            <div className="productCard2">
              <div>
                <div>
                  <p>{result.productName}</p>
                  <p className="lan32">{result.businessName}</p>
                </div>
                {result.shippingOption !== "" && (
                  <div className="freeShippingContainer">
                    <p className="lan33">OFFERS FREE pickup</p>
                  </div>
                )}
                <div className="lan34">
                  <div>
                    <p>
                      <strong>${convertPrice(result.productPrice, 0)}</strong>
                    </p>
                  </div>
                  {result.discount !== 0 && (
                    <div className="lan35">
                      <p className="previousPrice">${convertPrice(result.productPrice, result.discount)}</p>
                    </div>
                  )}
                  {result.discount !== 0 && <p className="lan36">({result.discount}% OFF)</p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSix;
