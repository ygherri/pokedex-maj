import React, { useState } from "react";

const Search = ({ onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchTermChange(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="custom-search">
      <input
        class="input custom-search"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Rechercher..."
      />

      <button class="button custom-btn" type="submit">
        Rechercher
      </button>
    </form>
  );
};

export default Search;
