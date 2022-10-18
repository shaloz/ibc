import React, { Component } from "react";

const initData = {
  heading: "Subscribe to get updates",
  text: "",
  submitText: "Subscribe",
};

const SectionSeven = () => {
  return (
    <section className="subscribe-area lan37">
      <form>
        <div>
          <p className="lan38">Subscribe to get updates</p>
        </div>
        <div>
          <input type="email" placeholder="Enter your email" className="lan39" />
        </div>
        <div>
          <button type="submit" className="btn btn-purple lan40">
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default SectionSeven;
