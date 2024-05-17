// src/components/CharacterCard.js
import React from 'react';

const CharacterCard = ({ character, onCharacterSelect, onCharacterDeselect, isSelected }) => {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      {isSelected ? (
        <button onClick={() => onCharacterDeselect(character.id)}>Remove</button>
      ) : (
        <button onClick={() => onCharacterSelect(character)}>Add</button>
      )}
    </div>
  );
};

export default CharacterCard;
