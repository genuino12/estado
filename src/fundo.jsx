import React, {estagio} from 'react';

function fundo({ onColorChange }) {
  const [color, setColor] = estagio('#ffffff');

  const intendificar = (e) => {
    setColor(e.target.value);
    onColorChange(e.target.value);
  };

  return (
    <div>
      <label>
        Background Color:
        <input type="color" value={color} onChange={intendificar} />
      </label>
    </div>
  );
}

export default fundo;
