import React, { useState } from 'react'; 
import PokemonSelector from './Selecionar.jsx';
import PokemonStage from './estagio.jsx';
import EvolutionButton from './evolucao.jsx';
import BackgroundChanger from './fundo.jsx';
import './App.css';

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState('Bulbasaur');
  const [stage, setStage] = useState(0);
  const [bgColor, setBgColor] = useState('#ffffff');

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
      <h1>Pokemon Evolution</h1>
      <PokemonSelector onSelect={handlePokemonSelect} />
      <PokemonStage selectedPokemon={selectedPokemon} stage={stage} />
      <EvolutionButton onEvolve={handleEvolution} />
      <BackgroundChanger onColorChange={handleBgColorChange} />
    </div>
  );
}

export default App;
