import React, { useState } from "react";

import Header from "../../../common/Header";
import BusinessManagerInfo from "../../../components/BusinessManagerInfo";
import BusinessSetup from "../../../components/BusinessSetup";
import styles from "../../../styles/getStarted.module.css";
import { useDispatch } from "react-redux";

const BusinessManager = (props) => {
  const dispatch = useDispatch();
  const [displayInfo, setDisplayInfo] = useState(true);

  return (
    <div>
      {props.isLoggedIn && <Header />}
      {displayInfo ? <BusinessManagerInfo styles={styles} {...props} /> : <BusinessSetup styles={styles} {...props} />}
    </div>
  );
};

export default BusinessManager;
