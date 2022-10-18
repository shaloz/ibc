import React, { useState } from "react";
import Header from "../../../component/Header";
import BusinessManagerInfo from "../../../component/BMGetstarted/BusinessManagerInfo";
import BusinessSetup from "../../../component/BMGetstarted/BusinessSetup";
import { closeSearch } from "../../../component/functions/header";
import styles from "../../../styles/getStarted.module.css";
import { useDispatch } from "react-redux";

const BusinessManager = () => {
  const dispatch = useDispatch();
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <div>
      <Header  closeSearch={closeSearch} />

      {displayInfo ? <BusinessManagerInfo styles={styles} /> : <BusinessSetup styles={styles} />}
    </div>
  );
};

export default BusinessManager;

