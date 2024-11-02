import React, { useState } from 'react'; 

function Fundo({ onColorChange }) {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (e) => {
    setColor(e.target.value);
    onColorChange(e.target.value);
  };

  return (
    <div>
      <label>
        Background Color:
        <input type="color" value={color} onChange={handleColorChange} />
      </label>
    </div>
  );
}

export default Fundo;
