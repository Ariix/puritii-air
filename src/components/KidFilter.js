import React, { Component } from "react";

class KidFilter extends Component  {
  selector;
  IntersectionObserver;

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
      rootMargin: "0px 0px 0px",
      threshold: .9
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

  render() {
    const displaySmall = require('../images/filter-top-display.png');
    const displayLarge = require('../images/filter-top-display-large.png');
    const circle34 = require('../images/circle-34.png');
    const titleSmall = require('../images/kid-filter-title-small.png');
    const titleLarge = require('../images/kid-filter-title-large.png');
    
    
    return (
      <div className="kidFilter" ref={this.selector} >
         <figure className="white-grad"></figure>

         <div className="kid-filter-wrap">
            <img className="filter-small" src={displaySmall} alt=""/>
            <img className="filter-large" src={displayLarge} alt=""/>
            <figure className="point">
              <figure className="arrow"></figure>
            </figure>
            <figure className="flash-point"></figure>
         </div>
         
         <div className="kid-text-area gRellax" data-rellax-speed="2">
           <div>
              <img className="circle-34" src={circle34} alt=""/>
           </div>
           <div>
              <img className="title-small" src={titleSmall} alt=""/>
              <img className="title-large" src={titleLarge} alt=""/>
              <p>新升级睡眠模式，只有34分贝，如同微风 轻拂之声，全家人都可以尽享宁静和谐生活。</p>
           </div>
         </div>
      </div>
    );
  }
}

export default KidFilter;