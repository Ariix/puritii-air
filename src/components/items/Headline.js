import React from "react";
import headline from "../../images/headline.png";
import play from "../../images/playbtn.png";

export default function Headline() {
  return (
    <div className="headline header-move" data-rellax-speed="3">
      <img src={headline} alt="puritii filter" />
      <div className="play">
        <img className="play-btn" src={play} alt="play button" />{" "}
        <h3>Watch the video</h3>
      </div>
    </div>
  );
}
