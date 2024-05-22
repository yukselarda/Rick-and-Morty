import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select, { components } from 'react-select';
import CharacterList from '../components/CharacterList';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState(() => {
    const savedCharacters = localStorage.getItem('selectedCharacters');
    return savedCharacters ? JSON.parse(savedCharacters) : [];
  });
  const [query, setQuery] = useState('');
  const [cache, setCache] = useState(() => {
    const savedCache = sessionStorage.getItem('cache');
    return savedCache ? JSON.parse(savedCache) : [];
  });

  useEffect(() => {
    localStorage.setItem('selectedCharacters', JSON.stringify(selectedCharacters));
  }, [selectedCharacters]);

  useEffect(() => {
    sessionStorage.setItem('cache', JSON.stringify(cache));
  }, [cache]);

  const fetchCharacters = async (query) => {
    if (!query) {
      setCharacters([]);
      return;
    }

    const cachedCharacters = cache.find(item => item.query === query);
    if (cachedCharacters) {
      setCharacters(cachedCharacters.results);
    } else {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const results = response.data.results;
        setCharacters(results);
        setCache(prevCache => [...prevCache, { query, results }]);
      } catch (error) {
        setCharacters([]);
        console.error("Error fetching characters:", error);
      }
    }
  };

  const handleInputChange = (inputValue) => {
    setQuery(inputValue);
    fetchCharacters(inputValue);
  };

  const handleCharacterSelect = (selectedOption) => {
    const character = selectedOption.value;
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

  const options = characters.map(character => ({
    label: character.name,
    value: character,
    image: character.image
  }));

  const customOption = ({ data, ...props }) => (
    <components.Option {...props}>
      <div className="custom-option">
        <img src={data.image} alt={data.label} className="custom-option-image" />
        <span>{data.label}</span>
      </div>
    </components.Option>
  );

  return (
    <>
      <h1 className='text-align-center'>Rick and Morty</h1>
      <Select
        inputValue={query}
        onInputChange={handleInputChange}
        onChange={handleCharacterSelect}
        options={options}
        placeholder="Search for a character"
        components={{ Option: customOption }}
      />
      <CharacterList characters={selectedCharacters} onCharacterDeselect={handleCharacterDeselect} />
    </>
  );
};

export default HomePage;