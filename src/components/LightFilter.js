import React from "react";
import lightFilter from "../images/blu_sky.png";
import ShadowFade from "./items/ShadowFade";

export default function LightFilter() {
  return (
    <div className="light">
      <ShadowFade></ShadowFade>
      <div className="blue-sky"></div>
    </div>
  );
}
