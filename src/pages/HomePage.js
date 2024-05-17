// src/pages/HomePage.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import CharacterList from '../components/CharacterList';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState(() => {
    const savedCharacters = localStorage.getItem('selectedCharacters');
    return savedCharacters ? JSON.parse(savedCharacters) : [];
  });
  const [lastQuery, setLastQuery] = useState('');

  const fetchCharacters = useCallback(async (query) => {
    if (query === lastQuery) {
      return;
    }
    setLastQuery(query);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  }, [lastQuery]);

  useEffect(() => {
    localStorage.setItem('selectedCharacters', JSON.stringify(selectedCharacters));
  }, [selectedCharacters]);

  const handleCharacterSelect = (character) => {
    setSelectedCharacters((prevCharacters) => {
      if (!prevCharacters.some((char) => char.id === character.id)) {
        return [...prevCharacters, character];
      }
      return prevCharacters;
    });
  };

  const handleCharacterDeselect = (characterId) => {
    setSelectedCharacters((prevCharacters) =>
      prevCharacters.filter((char) => char.id !== characterId)
    );
  };

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setCharacters([]);
    } else {
      fetchCharacters(query);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {characters.length > 0 && (
        <CharacterList characters={characters} onCharacterSelect={handleCharacterSelect} />
      )}
      <h2>Selected Characters</h2>
      <CharacterList characters={selectedCharacters} onCharacterDeselect={handleCharacterDeselect} />
    </div>
  );
};

export default HomePage;
