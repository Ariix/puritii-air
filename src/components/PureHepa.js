
import React, { Component } from "react";

class PureHepa extends Component  {
  hepaSection;
  IntersectionObserver;

  constructor(props) {
    super(props);
    this.hepaSection = React.createRef();
    this.state = {
      count: 0
    };
  }

    componentDidMount = () => {
    var x = this.hepaSection.current;
    let options = {
      root: this.x,
      rootMargin: "0px 0px 0px",
      threshold: .7
    };
    this.observer = new IntersectionObserver(entries => {
      
      if (entries[0].isIntersecting) {
        x.classList.add("active");
      } 
      else {
        x.classList.remove("active");
      }

      const distance = entries[0].boundingClientRect.top;
      if (distance < window.innerHeight / 2) {
        x.classList.add("force-circles");
      }else {
        x.classList.remove('force-circles');
      }

    }, options);
    this.observer.observe(x);
  };

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    const dots = require('../images/dots.svg');
    const filterGraphic = require('../images/filter-graphic.png');
    const filterLayer = require('../images/hepa.png');
    const title = require('../images/H13-title.png');
    const circle1 = require('../images/pure-hepa-circle-1.png');
    const circle2 = require('../images/pure-hepa-circle-2.png');
    const circle3 = require('../images/pure-hepa-circle-3.png');
    const circle4 = require('../images/pure-hepa-circle-4.png');
    const chain = require('../images/chain.png');
    
    return (
      <div className="pure-hepa" ref={this.hepaSection}  >

        <div className="left">
          <img  className="grey dots gRellax" src={dots} alt="" data-rellax-speed="-3"/>
          <div className="orange-square-wrap">
            <figure className="square orange"></figure>
          </div>
          <div className="filter-wrap">
            <img src={filterLayer} className="filter-layer" alt="" />
            <img src={filterGraphic} className="filter-graphic" alt="" />
          </div>
          
         
        </div>

        <div className="right">
          <div className="gRellax" data-rellax-speed="2">
          <img src={title} alt="" className="title"/>
          <p className="view-test"><img src={chain} className="chain" alt=""/>VIEW TEST REPORT</p>
          <p>倍净多效空气净化器独特RVOC吸附网，含纳米微孔沸石及超活性碳（Ultra-Activated Carbon）双重技术，再加上去除甲醛的速度达CADR 554m3/h，能快速循环清除甲醛及有害气体，把室内甲醛量大幅降至低于0.008mg/m3, 比国际标准更安全。倍净多效空气净化器，照料孩子脑部发育，给孩子置身大自然的清新学习环境。</p>
          <div className="circles" ref={this.circles}>
             <img src={circle1} className="circle1" alt="" />
             <img src={circle2} className="circle2" alt="" />
             <img src={circle3} className="circle3" alt="" />
             <img src={circle4} className="circle4" alt="" />
          </div>
          
        </div>
        <div className="blue-square-wrap">
            <figure className="square blue"></figure>
          </div>
        </div>

      </div>
    );
  }
}

export default PureHepa;
