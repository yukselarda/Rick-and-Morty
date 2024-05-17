import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import CharacterList from '../components/CharacterList';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState(() => {
    const savedCharacters = localStorage.getItem('selectedCharacters');
    return savedCharacters ? JSON.parse(savedCharacters) : [];
  });
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = useCallback(async (query) => {
    setLoading(true);

    const cachedCharacters = sessionStorage.getItem(query);
    if (cachedCharacters) {
      setCharacters(JSON.parse(cachedCharacters));
      setLoading(false);
    } else {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const results = response.data.results;
        setCharacters(results);
        sessionStorage.setItem(query, JSON.stringify(results));
        setLoading(false);
      } catch (error) {
        setCharacters([]);
        setLoading(false);
        console.error("Error fetching characters:", error);
      }
    }
  }, []);

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
      setShowResults(false);
    } else {
      fetchCharacters(query);
      setShowResults(true);
    }
  };
  console.log(characters.length);


  return (
    <>
      <h1 className='text-aling-center'>Rick and Morty</h1>
      <SearchBar onSearch={handleSearch} onFocus={() => setShowResults(true)} />
      {showResults && (
        <div className="results-list">
          {loading ? (
            <div className="loading">Yükleniyor...</div>
          ) : characters.length > 0 ? (
            <ul>
              {characters.map((character) => (
                <li key={character.id} onClick={() => handleCharacterSelect(character)}>
                  <img src={character.image} alt={character.name} className="character-image" />
                  <span>{character.name}</span>
                </li>
              ))}
            </ul>
          ) : characters.length === 0 ? (
            <div className="no-results">Sonuç bulunamadı</div>
          ) : null}
        </div>
      )}

      <CharacterList characters={selectedCharacters} onCharacterDeselect={handleCharacterDeselect} />
    </>
  );
};

export default HomePage;
