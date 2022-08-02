import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-top">
          <div className="about-left">
            <p>Product Designer</p>
            <p>That's me!</p>
          </div>
          <div className="about-right">
            Over the past 12 years, I've worked with a diverse range of clients,{" "}
            <br />
            from startups to Fortune 500 companies. I love crafting interfaces{" "}
            <br />
            that delight users and help businesses grow.
          </div>
        </div>
        <div className="about-bottom">
          <div className="row1">
            <img
              src="https://images.unsplash.com/photo-1522648485144-849409408aee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="pic"
            />
            <img
              src="https://images.unsplash.com/photo-1540612597331-63c67ea382fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="pic"
            />
            <img
              src="https://images.unsplash.com/photo-1536158614364-49b81421db1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="pic"
            />
          </div>
          <div className="row2">
            <img
              src="https://images.unsplash.com/photo-1532318065232-2ba7c6676cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=923&q=80"
              alt="pic"
            />
            <img
              src="https://images.unsplash.com/photo-1598601982231-6646b0c3a5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="pic"
            />
            <img
              src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
