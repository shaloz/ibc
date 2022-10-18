import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock, faMoneyCheck , faMoneyBillWave, faWallet} from "@fortawesome/free-solid-svg-icons";
import {faBuysellads} from "@fortawesome/free-brands-svg-icons"

const SectionTwo = ({ styles }) => {
  return (
    <div className={styles.getStartedSectionTwo}>
      <div style={{ width: 800, margin: "auto" }}>
        <p style={{ textAlign: "center", fontSize: 25, marginBottom: 40 }}>Simple, transparent, secure</p>
        <div style={{ borderTop: "1px solid #000", borderBottom: "1px solid #000", padding: 30, width: 700, margin: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginLeft: 40 }}>
            <div style={{ width: 300 }}>
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 19, marginRight: 20 }} />
              <span style={{ fontSize: 18 }}>No additional monthly fees</span>
            </div>
            <div style={{ width: 260 }}>
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 19, marginRight: 20 }} />
              <span style={{ fontSize: 18 }}>Automatic deposits</span>
            </div>
            <div style={{ marginTop: 20, width: 260 }}>
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 19, marginRight: 20 }} />
              <span style={{ fontSize: 18 }}>Secure transactions</span>
            </div>
            <div style={{ marginTop: 20, width: 260 }}>
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 19, marginRight: 20 }} />
              <span style={{ fontSize: 18 }}>Seller protection</span>
            </div>
          </div>
        </div>
        <div style={{ width: 700, marginTop: 70, marginBottom: 60 }}>
          <div style={{ marginTop: 20 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 70 }}>
                <div style={{ backgroundColor: "#fff", width: 30, padding: 10, borderRadius: "50%" }}>
                  <FontAwesomeIcon icon={faMoneyBillWave} style={{ fontSize: 25,  marginTop: 3 }} />
                </div>
              </div>
              <div>
                <p style={{ fontSize: 20 }}>$0.00 monthly</p>
                <p style={{ fontWeight: 200, fontSize: 14 }}>iBeautyConnect charges no monthly fee to use the platform.</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 50 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 70 }}>
                <div style={{ backgroundColor: "#fff", width: 30, padding: 10, borderRadius: "50%" }}>
                  <FontAwesomeIcon icon={faMoneyCheck} style={{ fontSize: 25,  marginTop: 3 }} />
                </div>
              </div>
              <div>
                <p style={{ fontSize: 20 }}>5 % Transaction fee, 2.9% + $0.50 payment processing fee</p>
                <p style={{ fontWeight: 200, fontSize: 14 }}>
                  When you sell a product or service, there's a small commission and standard payment processing fee.
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 50 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 70 }}>
                <div style={{ backgroundColor: "#fff", width: 30, padding: 10, borderRadius: "50%" }}>
                  <FontAwesomeIcon icon={faWallet} style={{ fontSize: 25, marginLeft:3, marginTop: 3 }} />
                </div>
              </div>
              <div>
                <p style={{ fontSize: 20 }}>$2 per month plus 0.25% + 25¢ deposit fee</p>
                <p style={{ fontWeight: 200, fontSize: 14 }}>iBeautyConnect charges this fee only when a deposit is made to your bank account</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 50 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 70, marginRight: 15 }}>
                <div style={{ backgroundColor: "#fff", width: 30, padding: 10, borderRadius: "50%" }}>
                  <FontAwesomeIcon icon={faBuysellads} style={{ fontSize: 25, marginLeft: 4, marginTop: 3 }} />
                </div>
              </div>
              <div>
                <p style={{ fontSize: 20 }}>Offsite Ads for plus members</p>
                <p style={{ fontWeight: 200, fontSize: 14 }}>
                  We advertise your business across the web through Offsite Ads. This feature is available only for plus members{" "}
                  <a href="/" style={{ color: "#000", textDecoration: "underline" }}>
                    Learn more about advertising
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: 500, marginLeft:80}}>
          <div style={{ display: "flex" }}>
            <div style={{width: 200}}>
              <FontAwesomeIcon icon={faLock} style={{ fontSize: 50, marginTop: 3 }} />
            </div>
            <div>
              <p style={{fontWeight: "200", fontSize:14}}>
                We process payments on our secure, SSL-encrypted platform, and have security specialists and fraud detection systems to protect you
                and your buyers 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
