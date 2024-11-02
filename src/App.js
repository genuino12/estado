import React, {estagio} from 'react';
import PokemonSelector from './Selecionar pokemon.jsx';
import PokemonStage from './estagio.jsx';
import EvolutionButton from './botão_evolução.jsx';
import BackgroundChanger from './fundo.jsx';

function App() {
  const [selectedPokemon, setSelectedPokemon] = estagio('Bulbasaur');
  const [stage, setStage] = estagio(0);
  const [bgColor, setBgColor] = estagio('#ffffff');

  const handleEvolution = () => {
    setStage((prevStage) => (prevStage < 2 ? prevStage + 1 : 0));
  };

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
    setStage(0);
  };

  const handleBgColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Pokemon Evolução</h1>
      <PokemonSelector onSelect={handlePokemonSelect} />
      <PokemonStage selectedPokemon={selectedPokemon} stage={stage} />
      <EvolutionButton onEvolve={handleEvolution} />
      <BackgroundChanger onColorChange={handleBgColorChange} />
    </div>
  );
}

export default App;
