import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ProductListingComponent from "./ProductListingComponent";

const Product = ({ styles }) => {
   const [render, setRender] = useState("newListing")
  const [listingArray, setListingArray] = useState([
    {
      addListing: true,
      editListing: false,
      img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      productName: "productName1",
      businessName: "businessName1",
      productPrice: 2000,
      currency: "$",
    },
    {
      addListing: false,
      editListing: true,
      img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      productName: "productName2",
      businessName: "businessName2",
      productPrice: 2000,
      currency: "$",
    },
    {
      addListing: false,
      editListing: true,
      img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      productName: "productName3",
      businessName: "businessName3",
      productPrice: 2000,
      currency: "$",
    },
    {
      addListing: false,
      editListing: true,
      img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      productName: "productName4",
      businessName: "businessName4",
      productPrice: 2000,
      currency: "$",
    },
    {
      addListing: false,
      editListing: true,
      img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      productName: "productName5",
      businessName: "businessName5",
      productPrice: 2000,
      currency: "$",
    },
    {
      addListing: false,
      editListing: true,
      img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      productName: "productName6",
      businessName: "businessName6",
      productPrice: 2000,
      currency: "$",
    },
    {
      addListing: false,
      editListing: true,
      img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      productName: "productName7",
      businessName: "businessName7",
      productPrice: 2000,
      currency: "$",
    },
    {
      addListing: false,
      editListing: true,
      img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      productName: "productName8",
      businessName: "businessName8",
      productPrice: 2000,
      currency: "$",
    },
    {
      addListing: false,
      editListing: true,
      img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      productName: "productName9",
      businessName: "businessName9",
      productPrice: 2000,
      currency: "$",
    },
    {
      addListing: false,
      editListing: true,
      img: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      productName: "productName10",
      businessName: "businessName10",
      productPrice: 2000,
      currency: "$",
    },
  ]);
  let content = null;

  const handleListing = (result) => {
    if (result.addListing) {
        setRender("newListing")
    }
    if (result.editListing) {
      alert("edit");
    }
  };

  const newListingContent = (
    <div style={{ textAlign: "center" }} id="newListing">
      <FontAwesomeIcon icon={faPlusCircle} style={{ marginTop: 70 }} />
      <p>Add a listing</p>
    </div>
  );

  const listingImage = (result) => {
    return (
      <div>
        <img src={result.img} style={{ width: 250, height: 180, objectFit: "cover" }} />
      </div>
    );
  };

  const listingContent = (result) => {
    return (
      <div>
        <div>
          <div style={{ padding: 10 }}>
            <p style={{ fontSize: 13, fontWeight: "100" }}>{result.productName}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ borderRight: "1px solid #E0E0E0", width: 180 }}>
                <p style={{ fontSize: 13, fontWeight: "100", color: "gray" }}>{result.businessName}</p>
              </div>
              <div>
                <p style={{ fontSize: 13 }}>
                  {result.currency}
                  {result.productPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #E0E0E0", marginTop: 4 }}>
          <div style={{ display: "flex", textAlign: "center" }}>
            <div style={{ width: 125, borderRight: "1px solid #E0E0E0", height: 35, cursor: "pointer" }}>
              <button style={{ backgroundColor: "transparent", fontSize: 15, marginTop: 8, color: "gray", outline: "none", cursor: "pointer" }}>
                Copy
              </button>
            </div>
            <div style={{ width: 125, cursor: "pointer" }}>
              <button style={{ backgroundColor: "transparent", fontSize: 15, marginTop: 8, color: "gray", outline: "none", cursor: "pointer" }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (render === "productListings") {
    content = (
      <div>
        <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
          <h1 style={{ fontWeight: "400", fontSize: 24 }}>Stock your shop</h1>
          <div style={{ width: 550, margin: "auto" }}>
            <p style={{ marginTop: 5, fontWeight: "100", fontSize: 14 }}>
              Add as many listings as you can. Ten or more would be a great start. More listings means more chances to be discovered!
            </p>
          </div>
        </div>
        <div style={{ width: 1400, boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", padding: 20, borderRadius: 3, margin: "auto" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
              {listingArray.map((result, index) => (
                <div key={index} style={{ width: 250, boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)", height: 280, marginRight: 20, marginTop: 20 }}>
                  <div
                    style={{ height: 180, backgroundColor: result.addListing ? "#E1BEE7" : "#fff", cursor: "pointer" }}
                    onClick={handleListing.bind(this, result)}
                  >
                    {result.addListing ? newListingContent : listingImage(result)}
                  </div>
                  {!result.addListing && listingContent(result)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    content = <ProductListingComponent render={render} styles={styles} setRender={setRender}/>;
  }

  return <div>{content}</div>;
};

export default Product;
