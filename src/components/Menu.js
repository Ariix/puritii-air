import React from "react";
import Logo from "./logo";

export default function Menu() {
  return (
    <div className="menu animate-menu">
      <span className="logo">
        <Logo></Logo>
        <span className="menu-title">Where nothing means everything.</span>
      </span>

      <button className="hamburger hamburger--spin" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className="fly-menu">
        <ul>
          <li>OVERVIEW</li>
          <li>STUDY</li>
          <li>TECH SPECS</li>
        </ul>
      </div>
    </div>
  );
}
