// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, onFocus }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onSearch(query);
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={onFocus}
        placeholder="Search for a character"
      />
    </div>
  );
};

export default SearchBar;
