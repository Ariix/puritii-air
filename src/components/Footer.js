import React from "react";
import Logo from "./logo";

export default function Footer() {
  const logo = require('../images/logo.svg');
  return (
    <footer className="site-footer">
       <div>
        <Logo/>
        <nav className="footer-nav">
          <a href="/hello.html">SOURCE</a>
          <a href="">PRIVACY POLICY</a>
          <a href="">DISCLAIMER</a>
          <a href="">TERMS OF USE</a>
          <a href="">CONTACT US</a>
        </nav>
        <div className="social-media">
          <i class="fa fa-instagram fa-3x" href="" target="_blank"></i>
          <i class="fa fa-youtube fa-3x" href="" target="_blank"></i>
          <i class="fa fa-facebook fa-3x" href="" target="_blank"></i>
          <i class="fa fa-google-plus fa-3x" href="" target="_blank"></i>
          <i class="fa fa-twitter fa-3x" href="" target="_blank"></i>
        </div>
       </div>
    </footer>
  );
}