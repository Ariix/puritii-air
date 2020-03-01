
import React, { Component } from "react";

class HepaFilter extends Component  {
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
      rootMargin: "-100px 0px 0px",
      threshold: 0.2
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
    const dots = require('../images/dots.svg');
    const filterHepaTop = require('../images/filter-hepa-top.png');
    const ai = require('../images/AI.png');
    const title = require('../images/hepa-title.png');
    
    return (
      <div className="hepa-section gRellax" ref={this.selector}  data-rellax-speed="-7">
        <figure className="square orange"></figure>
        <figure className="square blue"></figure>
          <img src={filterHepaTop} className="hepa-filter-top" alt="" />
         
        <img  className="grey dots gRellax" src={dots} alt="" data-rellax-speed="3"/>



          <div className="hepa-text-area">
              <img src={ai} alt="" className="circle"/>
              <div>
                <img alt="" className="title" src={title}/>

                  <p>新升级智能显示版，能实时侦测室内污染数据，智能调节滤净强度，让您随时随地了解家居空气实况，时刻守护家人的温馨时光！</p>
              </div>
          </div>
         

      </div>
    );
  }
}

export default HepaFilter;
