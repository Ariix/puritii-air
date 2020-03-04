import React, { Component } from "react";
import fivePoints from "../images/5points.png";
import fivePointsSmall from "../images/5points-small.png";
import titleSmall from "../images/blue-filter-title-small.png";
import titleLarge from "../images/blue-filter-title-large.png";

class Lightfilter extends Component {
  section;
  shade;
  observer;

  constructor(props) {
    super(props);
    this.section = React.createRef();
    this.shade = React.createRef();
    this.state = {
      count: 0
    };
  }

  componentDidMount = () => {
    var x = this.section.current;
    var shade = this.shade.current;
    let options = {
      root: this.x,
      rootMargin: "0px",
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
    };
    this.observer = new IntersectionObserver(entries => {
      const distance = entries[0].boundingClientRect.top;
      if (entries[0].isIntersecting) {
        if (distance <= window.innerHeight / 2) {
          x.classList.add("active");
        }else {
          x.classList.remove("active");
        }
        if (distance <= window.innerHeight / 6) {
          shade.classList.add('inactive-shade');
        }else {
          shade.classList.remove('inactive-shade');
        }
      } 
      else {
        x.classList.remove("active");
      
      }
    }, options);
    this.observer.observe(x);
  };

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render(){
    return (
      <div className="blue-sky" ref={this.section}>
          <div className="shade" ref={this.shade}></div>
          <div className="light-filter-text gRellax" data-rellax-speed="2">
            <img alt="" className="title-small" src={titleSmall}/>
            <img alt="" className="title-large" src={titleLarge}/>
            {/* <h2>一网打尽<span className="break-on-mobile"><span className="larger-five">5</span>大污染物</span></h2> */}
            <h2 >守护家人幸福健康</h2>
          </div>
          <img  className="five-points gRellax" src={fivePoints} alt=""  data-rellax-speed="2"/>
          <img  className="five-points-small gRellax" src={fivePointsSmall} alt=""  data-rellax-speed="3"/>
          
        
      </div>
    );
  }
}

export default Lightfilter;
