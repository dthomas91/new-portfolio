import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="me" src={require("../assets/me.jpg")} />
        <div className="header_links_wrapper">
          <p>
            <a className="header_links" href="./">
              Home
            </a>
          </p>
          <p>
            <a className="header_links" href="./">
              Resume
            </a>
          </p>
          <p>
            <a className="header_links" href="./About">
              About
            </a>
          </p>
          <p>
            <a className="header_links" href="./Projects">
              Projects
            </a>
          </p>
          <p>
            <a className="header_links" href="./Contact">
              Contact
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
