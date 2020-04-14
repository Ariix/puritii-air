import React from "react";
import airFilter from "../../images/air-filter.png";

export default function TopFilter() {
  return (      
    <div data-rellax-speed="-2" className="filter-house rellax">
      <div className="shadowFilter rellax" data-rellax-speed="-4"></div>
      <img src={airFilter} alt="filter" className="filter " ></img>
    </div>
  );
}
