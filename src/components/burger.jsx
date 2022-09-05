import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/burger.css";
import AccountModal from "./accountModal";

export default (props) => {
  return (
    // Pass on our props
    <Menu right {...props}>
      <AccountModal />

      <a className="menu-item" href="#home">
        Home
      </a>

      <a className="menu-item" href="#services">
        Services
      </a>

      <a className="menu-item" href="#aboutus">
        About us
      </a>

      <a className="menu-item" href="#team">
        Team
      </a>

      <a className="menu-item" href="#portfolio">
        Portfolio
      </a>

      <a className="menu-item" href="#contact">
        Contact
      </a>
    </Menu>
  );
};
