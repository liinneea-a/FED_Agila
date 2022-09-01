import React from "react";
import Headliner from "./Headliner";
import "../styles/skill.css";
import { projects } from "../data";

function SkillSection() {
  return (
    <div className="section">
      <Headliner
        title="Our Works"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus"
      />
      <div className="wrapper">
        <div className="content-box">
          <div className="item">
            <a href={projects.TierCopy.link} target="_blank">
              <img src={projects.TierCopy.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.Woodlands.link} target="_blank">
              <img src={projects.TierCopy.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.KawanCV.link} target="_blank">
              <img src={projects.KawanCV.image} alt="Kawan's CV" />
            </a>
          </div>
          <div className="item">
            <a href={projects.MaximilianCV.link} target="_blank">
              <img src={projects.TierCopy.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.LinneaCV.link} target="_blank">
              <img src={projects.TierCopy.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.TomasJobListing.link} target="_blank">
              <img src={projects.TierCopy.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.SabinaCalculator.link} target="_blank">
              <img src={projects.TierCopy.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.TomasChatUp.link} target="_blank">
              <img src={projects.TierCopy.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.MaximilianWeatherApp.link} target="_blank">
              <img src={projects.TierCopy.image} alt="image for later" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
