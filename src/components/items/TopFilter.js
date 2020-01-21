import React from "react";
import filter from "../../images/r2.png";
import Shadow from "./ShadowFilter";

export default function TopFilter() {
  return (
    <div className="filter-house">
      <Shadow></Shadow>
      <img src={filter} alt="filter"></img>
    </div>
  );
}
