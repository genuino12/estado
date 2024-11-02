import React from 'react';

function PokemonSelector({ onSelect }) {
  const pokemons = ['Bulbasaur', 'Charmander', 'Squirtle'];

  const handleSelectChange = (event) => {
    const selectedPokemon = event.target.value;
    onSelect(selectedPokemon);
  };

  return (
    <div>
      <label>
        Selecionar o Pokémon:
        <select onChange={handleSelectChange}>
          <option value="">Escolha um Pokémon</option>
          {pokemons.map((pokemon) => (
            <option key={pokemon} value={pokemon}>
              {pokemon}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default PokemonSelector;
