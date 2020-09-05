import React from "react";

const SearchQuotes = ({ searchText, setSearchText }) => {
  return (
    <div className="search-container">
      <input
        value={searchText}
        placeholder="search quotes"
        className="search-bar"
        onChange={(e) => setSearchText(e.target.value)}
        onClick={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "search quotes")}
      />
    </div>
  );
};

export default SearchQuotes;
