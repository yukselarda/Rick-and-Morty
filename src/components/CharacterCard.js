import React from 'react';

const CharacterCard = ({ character, onCharacterSelect, onCharacterDeselect, isSelected }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div>
        <div className='card-flex'>
          <h2>Name:</h2>
          <span>{character.name}</span>
        </div>
        <div className='card-flex'>
          <h2>Tür:</h2>
          <span>{character.species}</span>
        </div>
      </div>
      <div className='text-aling-right'>
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
