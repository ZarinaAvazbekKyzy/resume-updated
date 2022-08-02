import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="main-top">
          <div className="main-right">
            <h2 id="orange">I design products</h2>
            <h2>that delight and inspire people.</h2>
            <h1>
              Hi! I’m Jessica, a product designer based in Berlin. I create{" "}
              <br />
              user-friendly interfaces for fast-growing startups.
            </h1>
            <button>Book a call</button>
            <button>Download CV</button>
          </div>
          <div className="main-left">
            <img
              src="https://images.unsplash.com/photo-1543871595-e11129e271cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="personpic"
            />
          </div>
        </div>
        <div className="main-bottom">
          <p>About me as a person</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            veritatis eveniet officia animi voluptatum, iure tempora vero? Illum
            aut tempore minima possimus. Tempore expedita magnam culpa officia
            eos. Tenetur, quaerat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis at pariatur cupiditate obcaecati in
            iste unde officia dolorem ut rem! Quidem deleniti porro sapiente
            ducimus culpa nesciunt ullam atque ex. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eos porro quisquam rerum nihil non,
            eveniet vitae, aut, alias voluptates ipsam aperiam doloribus.
            Aliquid accusamus doloribus voluptatum, alias esse nulla provident!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
