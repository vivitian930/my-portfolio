import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./About";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Profile from "./Profile";

import "./Profile.css";

function App() {
  return (
    <div className="app">
      <Header />

      {/* <About /> */}
      <Profile />
      <Portfolio />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
