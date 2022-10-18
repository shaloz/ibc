import React from "react";

const SectionOne = ({ styles }) => {
  return (
    <section className={styles.getStartedSectionOne}>
      <div style={{ width: 800, margin: "auto" }}>
        <p style={{ fontWeight: "500", fontSize: 24 }}>
          Join the creative marketplace where millions of shoppers spend billions each year purchasing directly from creative entrepreneurs like you.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 50 }}>
        <div style={{ width: 300 }}>
          <img src="/image/icon1.svg" style={{ width: 170 }} />
          <p>Something Dope</p>
          <div style={{ marginTop: 10 }}>
            <p style={{ fontWeight: "100", color: "#888", fontSize: 14 }}>
              Something Dope Something Dope Something Dope Something Something Something Dope
            </p>
            <p style={{ cursor: "pointer", textDecoration: "underline", marginTop: 5, fontSize: 14, color: "#222" }}>Learn more</p>
          </div>
        </div>
        <div style={{ width: 300 }}>
          <img src="/image/icon2.svg" style={{ width: 170 }} />
          <p>Something Dope</p>
          <div style={{ marginTop: 10 }}>
            <p style={{ fontWeight: "100", color: "#888", fontSize: 14 }}>
              Something Dope Something Dope Something Dope Something Something Something Dope
            </p>
            <p style={{ cursor: "pointer", textDecoration: "underline", marginTop: 5, fontSize: 14, color: "#222" }}>Learn more</p>
          </div>
        </div>
        <div style={{ width: 300 }}>
          <img src="/image/icon3.svg" style={{ width: 170 }} />
          <p>Something Dope</p>
          <div style={{ marginTop: 10 }}>
            <p style={{ fontWeight: "100", color: "#888", fontSize: 14 }}>
              Something Dope Something Dope Something Dope Something Something Something Dope
            </p>
            <p style={{ cursor: "pointer", textDecoration: "underline", marginTop: 5, fontSize: 14, color: "#222" }}>Learn more</p>
          </div>
        </div>
      </div>
      <div style={{ width: 330, margin: "auto", marginTop: "13%" }}>
        <div style={{ position: "absolute", marginTop: -70, marginLeft: 80 }}>
          <img src="/image/icon4.svg" style={{ width: 180 }} />
        </div>
        <div style={{ border: "1px solid #E0E0E0", padding: 20, paddingBottom: 10, height: 200 }}>
          <div style={{ marginTop: 90 }}>
            <p style={{ marginBottom: 20 }}>Start Selling today</p>
            <button className={styles.btn100}>Open your iBC Business</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
