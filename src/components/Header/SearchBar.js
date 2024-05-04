import React, { useState, useEffect } from "react";
import "./SearchBar.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from "../../context/mealContext";
import { useNavigate } from "react-router-dom";
import { startFetchMealsBySearch } from "../../actions/mealsaction";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch, meals } = useMealContext();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealsBySearch(dispatch, searchTerm);
  };

  return (
    <form className="search-form" onSubmit={(e) => handleSearchResult(e)}>
      <input
        type="text"
        className="form-control-input text-dark-gray fs-15 search-box"
        placeholder="Search for food"
        onChange={(e) => handleSearchTerm(e)}
      />
      <button type="submit" className="form-submit-btn text-uppercase">
        <BsSearch className="btn-icon" size={14} />
      </button>
    </form>
  );
};

export default SearchBar;
