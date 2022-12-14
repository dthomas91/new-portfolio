import React from "react";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <div className="greeting">
        <Typewriter
        onInit={(typewriter) => {
          typewriter
          .changeDelay(70)
          .typeString("Welcome to my page!")
          .pauseFor(1000)
          .start()
        }}
        />
      </div>
    </>
  );
};

export default Home;
