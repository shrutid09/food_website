import React, { useState } from "react";
import "./FilterSection.scss";
import { MdOutlineFilterAlt } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

const FilterSection = ({ areas, onFilterChange, onSortChange }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedArea, setSelectedArea] = useState("");

  const handleFilterToggle = () => {
    alert("Not available in your area");
  };

  const handleAreaChange = (event) => {
    alert("Not available in your area");
  };

  const handleApplyFilters = () => {
    alert("Not available in your area");
  };

  const handleSortByClick = () => {
    alert("Not available in your area");
  };

  return (
    <div className="filter-section">
      <div className="filter-buttons">
        <button className="filter-button" onClick={handleFilterToggle}>
          <MdOutlineFilterAlt /> Filter
        </button>
        {showFilters && (
          <div className="filter-dropdown">
            <div className="filter-option">
              <label htmlFor="area">Filter by Area:</label>
              <select
                id="area"
                value={selectedArea}
                onChange={handleAreaChange}
              >
                <option value="">All Areas</option>
                {areas &&
                  areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
              </select>
            </div>
            <button className="apply-button" onClick={handleApplyFilters}>
              Apply
            </button>
          </div>
        )}
      </div>
      <button className="sort-button" onClick={handleSortByClick}>
        <TiArrowSortedDown /> Sort By
      </button>
    </div>
  );
};

export default FilterSection;
