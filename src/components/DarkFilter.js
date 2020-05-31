import React from "react";
import TopFilter from "./items/TopFilter";
import Headline from "./items/Headline";

const DarkFilter = () => {

  const dots = require('../images/dots.svg');
  const text = require('../images/white-yellow-blue-text.png');
  const textSmall = require('../images/white-yellow-blue-text_small.png');


  return (
  
    <div className="dark-bg">
      <Headline></Headline>
      <TopFilter></TopFilter>
        <div className="second-section ">
          <img className="text text-large" src={text} alt=""/>
          <img className="text text-small" src={textSmall} alt=""/> 
          <img className="dots1" src={dots} alt=""/>
          <img className="dots2" src={dots} alt="" />
        </div>
    </div>

  );
};

export default DarkFilter;


// import React, { Component } from "react";
// import TopFilter from "./items/TopFilter";
// import Headline from "./items/Headline";

// class DarkFilter extends Component {
//   selector;

//   constructor(props) {
//     super(props);
//     this.selector = React.createRef();
//     this.state = {
//       count: 0
//     };
//   }


//   componentDidMount = () => {
//     var x = this.selector.current;
//     let options = {
//       root: this.x,
//       rootMargin: "-100px 0px 0px 0px",
//       threshold: .5
//     };
//     this.observer = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) {
//         x.classList.add("active");
//       }
//       else {
//         x.classList.remove("active");
//       }
//     }, options);
//     this.observer.observe(x);
//   };

//   componentWillUnmount() {
//     this.observer.disconnect();
//   }

//   render(){
//     const dots = require('../images/dots.svg');
//     const text = require('../images/white-yellow-blue-text.png');

//     return (
//       <div className="dark-bg" ref={this.selector}>
//         <Headline></Headline>
//         <TopFilter></TopFilter>
//         <div className="second-section gRellax" data-rellax-speed="4">
//           <img alt="" src={text} className="text"/>
//           <img  className="dots1" src={dots} alt=""/>
//           <img  className="dots2" src={dots} alt="" />
//         </div>
//       </div>
//     );
//   }
// }

// export default DarkFilter;
