import React, { useState } from "react";
import "./SearchInput.scss";
import searchIcon from "../../Assets/Images/search.svg";

function SearchInput({ placeholder, width, value, onChange }) {
  return (
    <div style={{ width: width }}>
      <div className="Search_Main">
        <input
          className="Search_Input"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <img className="SearchImage" src={searchIcon} />
      </div>
    </div>
  );
}

export default SearchInput;
