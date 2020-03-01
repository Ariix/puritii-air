import React, { Component } from "react";
import fivePoints from "../images/5points.png";
import fivePointsSmall from "../images/5points-small.png";
import titleSmall from "../images/blue-filter-title-small.png";
import titleLarge from "../images/blue-filter-title-large.png";

class Lightfilter extends Component {
  selector;
  observer;

  constructor(props) {
    super(props);
    this.selector = React.createRef();
    this.state = {
      count: 0
    };
  }

  componentDidMount = () => {
    var x = this.selector.current;
    let options = {
      root: this.x,
      rootMargin: "0px",
      threshold: .5
    };
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        x.classList.add("active");
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
      <div className="blue-sky" ref={this.selector}>
          <div className="shade"></div>
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
