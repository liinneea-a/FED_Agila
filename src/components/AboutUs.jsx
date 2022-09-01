import React from "react";
import Headliner from "./Headliner";

function AboutUs() {
  return (
    <div className="section" id="aboutUs">
      <Headliner
        title="About us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus"
      />
      <div style={rootStyle}>
        <div style={contentTextStyle}>
          <p className="largePText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim
          </p>
          <p className="largePText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim
          </p>
          <p className="largePText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim
          </p>
          <p className="largePText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim
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
