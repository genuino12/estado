import React from 'react';

function Selecionar_Pokemon({ onSelect }) {
  const selecionar = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div>
      <label>Selecionar o Pokémon: </label>
      <select onChange={selecionar}>
        <option value="Bulbasaur">Bulbasaur</option>
        <option value="Charmander">Charmander</option>
        <option value="Squirtle">Squirtle</option>
      </select>
    </div>
  );
}

export default Selecionar_Pokemon;
