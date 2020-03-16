import React from "react";
import Logo from "./logo";

export default function Footer() {
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
          <i className="fa fa-instagram fa-3x" href="" target="_blank"></i>
          <i className="fa fa-youtube fa-3x" href="" target="_blank"></i>
          <i className="fa fa-facebook fa-3x" href="" target="_blank"></i>
          <i className="fa fa-google-plus fa-3x" href="" target="_blank"></i>
          <i className="fa fa-twitter fa-3x" href="" target="_blank"></i>
        </div>
       </div>
    </footer>
  );
}