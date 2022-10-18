import React from "react";

const SectionEight = ({ styles }) => {
  return (
    <div className={styles.getStartedSectionEight}>
      <div style={{ width: 1100, margin: "auto", marginTop: 100 }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 30 }}>Frequently Asked Questions</p>
          <p style={{ marginTop: 25, fontWeight: "100" }}>Here are some common questions about selling on iBeautyConnect</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: 520 }}>
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontWeight: "400" }}>How do fees work on iBeautyConnect?</h2>
              <div style={{ marginTop: 10 }}>
                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 14 }}>
                  Joining and starting a shop on iBeautyConnect is free. There are three basic selling fees: a listing fee, a transaction fee, and a
                  payment processing fee. There’s also an advertising fee for sales that come from Offsite Ads.
                </p>
                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 14 }}>
                  It costs $0.20 to publish a listing to the marketplace. A listing lasts for four months or until the item is sold. Once an item
                  sells, there is a 5% transaction fee on the sale price (including the shipping price you set). If you accept payments through
                  iBeautyConnect Payments, we also collect a 3% + $0.25 payment processing fee when an item is sold.
                </p>
                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 14 }}>
                  Listing fees are billed for $0.20 USD, so if your bank's currency is not USD, the amount may differ based on changes in the exchange
                  rate. The payment processing fee may also{" "}
                  <a href="/" style={{ color: "#000", textDecoration: "underline" }}>
                    varies by bank country.
                  </a>
                </p>
                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 15 }}>
                  You pay an advertising fee on any sales you make from Offsite Ads. When you open your iBeautyConnect shop, you can decide if you
                  want to participate in iBeautyConnect advertising services.
                </p>
                <a href="/" style={{ color: "#000", textDecoration: "underline", fontWeight: "100", fontSize: 14 }}>
                  Learn more.
                </a>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontWeight: "400" }}>What do I need to do to create a shop?</h2>
              <div style={{ marginTop: 10 }}>
                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 14 }}>
                  Joining and starting a shop on iBeautyConnect is free. There are three basic selling fees: a listing fee, a transaction fee, and a
                  payment processing fee. There’s also an advertising fee for sales that come from Offsite Ads.
                </p>
                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 14 }}>
                  It costs $0.20 to publish a listing to the marketplace. A listing lasts for four months or until the item is sold. Once an item
                  sells, there is a 5% transaction fee on the sale price (including the shipping price you set). If you accept payments through
                  iBeautyConnect Payments, we also collect a 2.9% + $0.50 payment processing fee when an item is sold.
                </p>

                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 15 }}>
                  You pay an advertising fee on any sales you make from Offsite Ads. When you open your iBeautyConnect shop, you can decide if you
                  want to participate in iBeautyConnect advertising services.
                </p>
                <a href="/" style={{ color: "#000", textDecoration: "underline", fontWeight: "100", fontSize: 14 }}>
                  Learn more.
                </a>
              </div>
            </div>
          </div>
          <div style={{ width: 520 }}>
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontWeight: "400" }}>How do I get paid?</h2>
              <div style={{ marginTop: 10 }}>
                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 14 }}>
                  Joining and starting a shop on iBeautyConnect is free. There are three basic selling fees: a listing fee, a transaction fee, and a
                  payment processing fee. There’s also an advertising fee for sales that come from Offsite Ads.
                </p>

                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 15 }}>
                  You pay an advertising fee on any sales you make from Offsite Ads. When you open your iBeautyConnect shop, you can decide if you
                  want to participate in iBeautyConnect advertising services.
                </p>
                <a href="/" style={{ color: "#000", textDecoration: "underline", fontWeight: "100", fontSize: 14 }}>
                  Learn more.
                </a>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontWeight: "400" }}>How does iBeautyConnect protect sellers?</h2>
              <div style={{ marginTop: 10 }}>
                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 14 }}>
                  Joining and starting a shop on iBeautyConnect is free. There are three basic selling fees: a listing fee, a transaction fee, and a
                  payment processing fee. There’s also an advertising fee for sales that come from Offsite Ads.
                </p>

                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 15 }}>
                  You pay an advertising fee on any sales you make from Offsite Ads. When you open your iBeautyConnect shop, you can decide if you
                  want to participate in iBeautyConnect advertising services.
                </p>
                <a href="/" style={{ color: "#000", textDecoration: "underline", fontWeight: "100", fontSize: 14 }}>
                  Learn more.
                </a>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontWeight: "400" }}>What can I sell on iBeautyConnect?</h2>
              <div style={{ marginTop: 10 }}>
                <p style={{ fontWeight: "100", marginBottom: 10, fontSize: 14 }}>
                  Joining and starting a shop on iBeautyConnect is free. There are three basic selling fees: a listing fee, a transaction fee, and a
                  payment processing fee. There’s also an advertising fee for sales that come from Offsite Ads.
                </p>

                <a href="/" style={{ color: "#000", textDecoration: "underline", fontWeight: "100", fontSize: 14 }}>
                  Learn more.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #E0E0E0", marginTop: 50 }}>
        <div style={{ textAlign: "center", marginTop: 100 }}>
          <p>Still have more questions? Feel free to contact us.</p>
          <button className={styles.contactUsBtn}>Contact iBeautyConnect</button>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
