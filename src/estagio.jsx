import React from 'react';
import bulbasaur from './pokemons/bulbasaur.png';
import ivysaur from './pokemons/ivysaur.png';
import venusaur from './pokemons/venusaur.png';
import charmander from './pokemons/charmander.png';
import charmeleon from './pokemons/charmeleon.png';
import charizard from './pokemons/charizard.png';
import squirtle from './pokemons/squirtle.png';
import wartortle from './pokemons/wartortle.png';
import blastoise from './pokemons/blastoise.png';

function Estagio_pokemon({ seleciona_pokemon, estagio }) {
  const pokemonData = {
    Bulbasaur: [
      { name: 'Bulbasaur', image: bulbasaur },
      { name: 'Ivysaur', image: ivysaur },
      { name: 'Venusaur', image: venusaur },
    ],
    Charmander: [
      { name: 'Charmander', image: charmander },
      { name: 'Charmeleon', image: charmeleon },
      { name: 'Charizard', image: charizard },
    ],
    Squirtle: [
      { name: 'Squirtle', image: squirtle },
      { name: 'Wartortle', image: wartortle },
      { name: 'Blastoise', image: blastoise },
    ],
  };

  const estagio_correto = pokemonData[seleciona_pokemon]?.[estagio];

  React.useEffect(() => {
    if (estagio_correto) {
      document.title = `Pokemon Atual: ${estagio_correto.name}`;
    }
  }, [estagio_correto]); 

  
  if (!estagio_correto) {
    return <div><h2>Pokemon não encontrado</h2></div>;
  }

  return (
    <div>
      <h2>{estagio_correto.name}</h2>
      <img src={estagio_correto.image} alt={estagio_correto.name} style={{ width: '200px' }} />
    </div>
  );
}

export default Estagio_pokemon;
