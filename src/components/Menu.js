import React, { Component } from "react";
import Logo from "./logo";
const filter = require('../images/puritii-filter-checkout.png');
const filterSmall = require('../images/puritii-filter-checkout-small.png');


class Menu extends Component {
  constructor(){
    super();
    this.state = {
      showModal:false,
      qty: 1,
      price: 10888,
      promo: `ENTER PROMO CODE`,
      newClass: ""
      
    }
  }

  showHideModal() {
    this.setState({
      showModal:!this.state.showModal
    })
  }

  increment() {
    this.setState({
      qty: this.state.qty + 1
    })
  }

  decrement(){
    this.setState(prevState => 
        ({qty: prevState.qty? prevState.qty-1: 0})
    )
  }

  promotion() {
    this.setState({
      promo: 'IWANTCLEANAIR',
      price: 8388,
      newClass: 'active'
    })
  }

 


  render() {
    const filter = require('../images/puritii-filter-checkout.png');
    return (
      <div className="menu animate-menu">
        <span className="logo">
          <Logo></Logo>
          <span className="menu-title">Where nothing<br/>means everything.</span>
        </span>
          {
            this.state.showModal ? 
            <div>
              <div className="modal-bg"></div>
              <div className="modal-box" className={`modal-box ${this.state.newClass}`}>
                <img alt="" src={filter} className="checkout-filter"/>
                <img alt="" src={filterSmall} className="checkout-filter-small"/>
                <button className="close-modal" onClick={() => this.showHideModal()}></button>
                <h2>倍净多效空气净化器<br/>PURITII Multi-Effect Air purifier</h2>
                <div className="counter-field">
                  <button className="counter" onClick={() => this.increment()}>+</button>
                  <span>{this.state.qty}台</span>
                  <button className="counter" onClick={() => this.decrement()}>-</button>
                </div>
                <button className="enter-code" onClick={() => this.promotion()}>{this.state.promo}</button>
                <div className="checkout-wrapper">
                    <div className="total">TOTAL :<br/><span>${this.state.price * this.state.qty}</span> RMB</div>
                    <button>CHECKOUT</button>
                </div>
              </div>
            </div>
            : null
          }
        <button className="button hide-on-desktop" type="button" onClick={() => this.showHideModal()}>BUY NOW</button>
        <button className="hamburger hamburger--spin" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <nav className="fly-menu">
          <ul>
            <li><a href="">OVERVIEW</a></li>
            <li><a href="">STUDY</a></li>
            <li><a href="">TECH SPECS</a></li>
          </ul>
          <button className="button hide-on-mobile" onClick={() => this.showHideModal()}>BUY NOW</button>
          <button className="globe" type="button"><i className="fa fa-globe fa-3x"></i></button>
          <ul className="lang"></ul>
        </nav>
      </div>
    );
  }

}



export default Menu;
