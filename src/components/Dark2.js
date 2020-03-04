import React, { Component } from "react";

class Dark2 extends Component {
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
      rootMargin: "0px 0px 0px 0px",
      threshold: 1
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
    const text = require('../images/white-yellow-blue-text.png');
    const dots = require('../images/dots.svg');
    return (
      <div className="dark-bg2" ref={this.selector}>
        <img alt="" src={text} className="text"/>
        <img  className="dots2 gRellax" src={dots} alt="" data-rellax-speed="-5"/>
      </div>
    );
  }

}

export default Dark2;