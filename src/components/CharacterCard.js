// src/components/CharacterCard.js
import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
