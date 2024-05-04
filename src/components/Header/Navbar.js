import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { MdFoodBank } from "react-icons/md";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [scrolled] = useState(false);

  return (
    <nav
      className={`navbar bg-green flex align-center ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container w-100">
        <div className="navbar-content text-white">
          <div className="brand-and-toggler flex align-center justify-between">
            <span className="navbar-brand-text fs-22 fw-7">Food Mood</span>
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
