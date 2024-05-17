import React from 'react';

const CharacterCard = ({ character, onCharacterSelect, onCharacterDeselect, isSelected }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className='text-aling-right'>
      <h2>{character.name}</h2>
      {isSelected ? (
        <button className='sil' onClick={() => onCharacterDeselect(character.id)}>Sil</button>
      ) : (
        <button className='ekle' onClick={() => onCharacterSelect(character)}>Ekle</button>
      )}
    </div>
    </div >
  );
};

export default CharacterCard;
