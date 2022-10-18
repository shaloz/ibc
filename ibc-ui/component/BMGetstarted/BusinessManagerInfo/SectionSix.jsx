import React from "react";

const SectionSix = ({ styles }) => {
  return (
    <div className={styles.getStartedSectionSix}>
      <div style={{ width: 1100, margin: "auto", paddingBottom: "10%" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 25, paddingTop: "20%" }}>Help when you need it</p>
          <div style={{ marginTop: 20, width: 500, margin: "auto" }}>
            <p style={{ fontWeight: "100" }}>
              We’re committed to helping our 1.8 million sellers thrive, with support and education for shops big and small.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ width: 500, marginTop: 40 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 80, marginRight: 50, marginTop: 5 }}>
              <img src="/image/icon7.svg" width="110" alt="" />
              </div>
              <div style={{ width: 400 }}>
                <div>
                  <p style={{ fontSize: 20 }}>Talk to us</p>
                </div>
                <div style={{ marginTop: 10 }}>
                  <p style={{ fontWeight: "100" }}>Reach our support staff by email or request a phone call whenever you have a question.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: 500, marginTop: 40 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 80, marginRight: 50, marginTop: 5 }}>
              <img src="/image/icon9.svg" width="110" alt="" />
              </div>
              <div style={{ width: 400 }}>
                <div>
                  <p style={{ fontSize: 20 }}>Tips for success</p>
                </div>
                <div style={{ marginTop: 10 }}>
                  <p style={{ fontWeight: "100" }}>Learn best practices for your business with our always-updating Seller Handbook.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: 500, marginTop: 40 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 80, marginRight: 50, marginTop: 5 }}>
              <img src="/image/icon10.svg" width="110" alt="" />
              </div>
              <div style={{ width: 400 }}>
                <div>
                  <p style={{ fontSize: 20 }}>Get advice</p>
                </div>
                <div style={{ marginTop: 10 }}>
                  <p style={{ fontWeight: "100" }}>Ask questions and find a community of sellers like you in iBeautyConnect’s forums and Teams.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: 500, marginTop: 40 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 80, marginRight: 50, marginTop: 5 }}>
              <img src="/image/icon8.svg" width="110" alt="" />
              </div>
              <div style={{ width: 400 }}>
                <div>
                  <p style={{ fontSize: 20 }}>Seller newsletter</p>
                </div>
                <div style={{ marginTop: 10 }}>
                  <p style={{ fontWeight: "100" }}>
                    Read the iBeautyConnect Success newsletter for tips on improving your shop, delivered straight to your inbox.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
