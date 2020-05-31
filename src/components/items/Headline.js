import React from "react";
import headline from "../../images/headline.png";
import headlineSmall from "../../images/headline_small.png";
import play from "../../images/playbtn.png";

export default function Headline() {
  return (
    <div className="headline">
      <img src={headline} className="headline-img" alt="puritii air filter" />
      <img src={headlineSmall} className="headline-img-small" alt="puritii air filter" />
      <div className="play">
        <img className="play-btn" src={play} alt="play button" />
        <h3>Watch the video</h3>
      </div>
    </div>
  );
}
