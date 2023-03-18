import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <span>My</span> Portfolio
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          {/* <li>
            <a href="#about">About</a>
          </li> */}
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          {/* <li>
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
