import React from "react";
const filter = require('../../images/puritii-filter-checkout.png');
const filterSmall = require('../../images/puritii-filter-checkout-small.png');
close(){
  
}
const Modal = () => {
    
    return (
      <div>
        <div className="modal"></div>
        <div className="modal-box">
          <img alt="" src={filter} className="checkout-filter"/>
          <img alt="" src={filterSmall} className="checkout-filter-small"/>
          <figure className="close" onClick={close}>X</figure>
          <h2>倍净多效空气净化器<br/>PURITII Multi-Effect Air purifier</h2>
          <div className="counter-field">This is the counter field</div>
          <button className="enter-code">ENTER PROMO CODE</button>
          <div className="checkout-wrapper">
              <div>TOTAL :<br/>${10888}<span> RMB</span></div>
              <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    )

}

export default Modal;