// src/components/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import '../index.css';  // Importa los estilos CSS

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
};

export default App;
