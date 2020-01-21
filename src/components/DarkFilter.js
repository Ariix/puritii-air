import React from "react";
import TopFilter from "./items/TopFilter";
import Headline from "./items/Headline";

export default function DarkFilter() {
  return (
    <div>
      <div className="dark-bg">
        <Headline></Headline>
        <TopFilter></TopFilter>
      </div>
    </div>
  );
}
