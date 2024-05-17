// src/components/CharacterList.js
import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, onCharacterSelect, onCharacterDeselect }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onCharacterSelect={onCharacterSelect}
          onCharacterDeselect={onCharacterDeselect}
          isSelected={onCharacterDeselect ? true : false}
        />
      ))}
    </div>
  );
};

export default CharacterList;
