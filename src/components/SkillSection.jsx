import React from "react";
import Headliner from "./Headliner";
import "../styles/skill.css";
import { projects } from "../data";

function SkillSection() {
  return (
    <div className="section" id="ourworks">
      <Headliner
        title="Our Works"
      />
      <div className="wrapper">
        <div className="content-box">
          <div className="item">
            <a href={projects.cameraProject.link} target="_blank">
              <img src={projects.cameraProject.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.woodland.link} target="_blank">
              <img src={projects.woodland.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.KawanCV.link} target="_blank">
              <img src={projects.KawanCV.image} alt="Kawan's CV" />
            </a>
          </div>
          <div className="item">
            <a href={projects.tankHero.link} target="_blank">
              <img src={projects.tankHero.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.LinneaCV.link} target="_blank">
              <img src={projects.LinneaCV.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.duckyProject.link} target="_blank">
              <img src={projects.duckyProject.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.letsDrink.link} target="_blank">
              <img src={projects.letsDrink.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.TomasChatUp.link} target="_blank">
              <img src={projects.TomasChatUp.image} alt="image for later" />
            </a>
          </div>
          <div className="item">
            <a href={projects.MaximilianWeatherApp.link} target="_blank">
              <img src={projects.MaximilianWeatherApp.image} alt="image for later" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
