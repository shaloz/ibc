import React, { useState } from "react";
import Title from "./Listings/Tittle";
import AboutListings from "./Listings/AboutListings";
import Category from "./Listings/Category";
import Feature from "./Listings/Feature";
import Occasion from "./Listings/Occasion";
import Holiday from "./Listings/Holiday";
import Description from "./Listings/Description";
import Tags from "./Listings/Tags";
import Materials from "./Listings/Materials";

const ListingDetails = ({}) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Title />
        <AboutListings />
        <Category />
        <Feature />
        <Occasion />
        <Holiday />
        <Description />
        <Tags />
        <Materials />
      </div>
    </div>
  );
};

export default ListingDetails;
