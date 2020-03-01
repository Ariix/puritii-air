
import React, { Component } from "react";

class FilterDisplay extends Component  {
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

  render() {
    const display = require('../images/filter-display.png');
    
    return (
      <div className="filter-display" ref={this.selector} >
         <img src={display} alt=""/>
      </div>
    );
  }
}

export default FilterDisplay;
