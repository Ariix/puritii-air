import React from 'react';
import { useRef } from "react";
import useOnScreen from "./items/UseOnScreen";
import couchAndMachine from "../images/couch.jpg";
import threeSixty from "../images/360.png";
import title from "../images/couch-section-title.png";

const CouchFilter = () => {

  const ref = useRef();
  const onScreen = useOnScreen(ref, 0, '900px');
  const onScreen2 = useOnScreen(ref, 0.4);

  return (
    <div className={`couch-section ${onScreen2 ? "active" : ""}`} ref={ref}>
        <figure className="couch-and-machine" style={{
            backgroundImage: onScreen
              ? `url(${couchAndMachine})`
              : "" 
            }} ref={ref}
        >
            <figure className="arrows rellax" data-rellax-speed="3"></figure>
        </figure>
        <div className="couch-text-area rellax" data-rellax-speed="1">
            <img src={threeSixty} alt="" />
            <div>
              <img src={title} alt="" className="title"/>
              <p>采用360度环抱式复合过滤技术，过滤PM2.5有害悬浮粒子的速度达CADR 728m3/h，全方位吸走污染物，滤除异味，输出环抱家人的好心情。倍净关顾您及家人健康，无论爱动宝宝去到哪儿，同样洁净无忧。</p>
            </div>
        </div>
    </div>
  );
}

export default CouchFilter;

// import React, { Component } from "react";
// import threeSixty from "../images/360.png";
// import title from "../images/couch-section-title.png";

// class CouchFilter extends Component  {
//   selector;
//   IntersectionObserver;

//   constructor(props) {
//     super(props);
//     this.selector = React.createRef();
//     this.state = {
//       count: 0
//     };
//   }

//     componentDidMount = () => {
//     var x = this.selector.current;
//     let options = {
//       root: this.x,
//       rootMargin: "0px",
//       threshold: 0.4
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

//   render() {
//     return (
//       <div className="couch-section" ref={this.selector}>
//           <figure className="couch-and-machine" >
//              <figure className="arrows gRellax" data-rellax-speed="3"></figure>
//           </figure>
//           <div className="couch-text-area gRellax" data-rellax-speed="1">
//               <img src={threeSixty} alt="" />
//               <div>
//                 <img src={title} alt="" className="title"/>
//                 <p>采用360度环抱式复合过滤技术，过滤PM2.5有害悬浮粒子的速度达CADR 728m3/h，全方位吸走污染物，滤除异味，输出环抱家人的好心情。倍净关顾您及家人健康，无论爱动宝宝去到哪儿，同样洁净无忧。</p>
//               </div>
//           </div>
         

//       </div>
//     );
//   }
// }

// export default CouchFilter;