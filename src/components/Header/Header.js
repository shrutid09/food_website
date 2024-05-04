import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-content flex align-center justify-center flex-column text-center">
        <h1 className="text-white fw-7 header-title ls-2">Search for Food</h1>
        <p className="text-uppercase text-white my-3 ls-1">
          What would you like to eat today?
        </p>
      </div>
    </header>
  );
};

export default Header;
