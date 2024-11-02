import React from 'react';

function Estagio_pokemon({ seleciona_pokemon, estagio }) {
  const pokemonData = {
    Bulbasaur: [
      { name: 'Bulbasaur', image: 'bulbasaur.png' },
      { name: 'Ivysaur', image: 'ivysaur.png' },
      { name: 'Venusaur', image: 'venusaur.png' },
    ],
    Charmander: [
      { name: 'Charmander', image: 'charmander.png' },
      { name: 'Charmeleon', image: 'charmeleon.png' },
      { name: 'Charizard', image: 'charizard.png' },
    ],
    Squirtle: [
      { name: 'Squirtle', image: 'squirtle.png' },
      { name: 'Wartortle', image: 'wartortle.png' },
      { name: 'Blastoise', image: 'blastoise.png' },
    ],
  };

  const estagio_correto = pokemonData[seleciona_pokemon][estagio];

  React.useEffect(() => {
    document.title = `pokemon correto: ${estagio_correto.name}`;
  }, [estagio_correto.name]);

  return (
    <div>
      <h2>{estagio_correto.name}</h2>
      <img src={estagio_correto.image} alt={estagio_correto.name} style={{ width: '200px' }} />
    </div>
  );
}

export default Estagio_pokemon;
