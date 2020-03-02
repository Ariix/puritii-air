import React from "react";
import Logo from "./logo";

export default function Footer() {
  const logo = require('../images/logo.svg');
  return (
    <footer className="site-footer">
      <Logo/>
      <nav className="footer-nav">
        <a href="">SOURCE</a>
        <a href="">PRIVACY POLICY</a>
        <a href="">DISCLAIMER</a>
        <a href="">TERMS OF USE</a>
        <a href="">CONTACT US</a>
      </nav>
      <div className="social-media">
        Social Media Images
      </div>
    </footer>
  );
}