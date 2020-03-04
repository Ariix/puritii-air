import React, { Component } from "react";
import TopFilter from "./items/TopFilter";
import Headline from "./items/Headline";

class DarkFilter extends Component {
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
      rootMargin: "0px",
      threshold: .7
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
    const dots = require('../images/dots.svg');
    return (
      <div className="dark-bg" ref={this.selector} >
        <Headline></Headline>
        <TopFilter></TopFilter>
        <img  className="dots1 gRellax" src={dots} alt="" data-rellax-speed="-7"/>
        
      </div>
    );
  }
}

export default DarkFilter;