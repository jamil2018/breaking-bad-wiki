import React from "react";

const SearchCharacters = ({ searchText, setSearchText }) => {
  return (
    <div className="search-container">
      <input
        value={searchText}
        placeholder="search characters"
        className="search-bar"
        onChange={(e) => setSearchText(e.target.value)}
        onClick={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "search characters")}
      />
    </div>
  );
};

export default SearchCharacters;
