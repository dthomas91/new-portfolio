import React from "react";
import Typewriter from "typewriter-effect";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="name-title">
        <h1>David Thomas</h1>
        <p>Full-stack web developer</p>
      </div>
      <div className="greeting">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(70)
              .typeString("Welcome to my page!")
              .pauseFor(1000)
              .start();
          }}
        />
      </div>
      <div className="invitation">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2100)
              .changeDelay(70)
              .typeString(
                "Please take a look around. I'd love to connect with you and work on a project."
              )
              .start();
          }}
        />
      </div>
      <div className="icon-links-intro">
        <p>Here are links for my linkedin and github</p>
      </div>
      <div className="icon-links">
        <a
          href="https://www.linkedin.com/in/david-thomas-856410166/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin" style={{color:"#0a66c2"}}></i>
        </a>
        <i className="fa-brands fa-github" style={{color:"#6e5494"}}></i>
      </div>
    </div>
  );
};

export default Home;
