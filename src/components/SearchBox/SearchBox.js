import React from "react";
import "./SearchBox.css";

export const SearchBox = ({ placeholder, handleSearchBoxChange }) => {
  return (
    <input
      className="searchBox"
      type="search"
      placeholder={placeholder}
      onChange={handleSearchBoxChange}
    ></input>
  );
};
