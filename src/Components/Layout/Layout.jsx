import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  let styleObj = {
    width: "100vw",
    height: "50px",
    backgroundColor: "black",
    position: "absolute",
    bottom: "0",
  };
  return (
    <div>
      <Outlet />
      <footer>
        <div className="footer-top">
          <h2>Ready to make something kickass?</h2>
          <h2 id="blue">Let's get on a call.</h2>
        </div>
        <div className="footer-middle">
          <div className="footer-middle-left">
            <p>Portfolio maker</p>
            <p>4353 Delaware Avenue, San Francisco, USA</p>
            <p>hi@thefolio.com</p>
          </div>
          <div className="footer-middle-right">
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Experience</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
            <a href="/">Projects</a>
            <a href="/">Dribbble</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
