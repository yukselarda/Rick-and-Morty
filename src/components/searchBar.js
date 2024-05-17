// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a character"
      />
    </div>
  );
};

export default SearchBar;
