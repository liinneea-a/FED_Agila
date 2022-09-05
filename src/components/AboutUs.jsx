import React from "react";
import Headliner from "./Headliner";

function AboutUs() {
  return (
    <div className="section" id="aboutus">
      <Headliner
        title="About us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus"
      />
      <div style={rootStyle} >
        <div style={contentTextStyle}>
          <p className="largePText">
          On the go since 2022, we've been doing digital for over a decade as a combined hivemind.
          </p>
          <p className="largePText">
          At Creative Point, we've always gone that extra mile for our clients. As an all-Swedish, award winning digital agency, we're proud to work with clients of all shapes and sizes. Always pushing to take our clients further online.
          </p>
          <p className="largePText">
          We design and build awesome websites and apps for a variety of devices. We deliver ecommerce platforms built for growth. We revel in helping customers through their digital journey; implementing digital marketing strategies that deliver results.
          </p>
          <p className="largePText">
          We pride ourselves in removing the mystery involved in succeeding online and ensure our clients understand every step of the process. We excel in digital design, ecommerce, development and marketing; offering our clients a 360-degree solution that enables them to maximise their online presence and employ strategic tactics to grow their business.
          </p>
        </div>
      </div>
    </div>
  );
}

const rootStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "1rem",
  fontSize: "0.9rem",
  padding: "4rem",
};

const contentTextStyle = {
  flexDirection: "column",
  display: "flex",
  gap: "2rem",
  alignItems: "flex-start",
};

export default AboutUs;
