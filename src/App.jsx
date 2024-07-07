import React, { useState } from 'react';
import './App.css'; 

const Progreso = () => {
  const [porcentaje, setPorcentaje] = useState(0); 

  const handleChange = (event) => {
    let valor = event.target.value;

    if (valor < 0) {
      valor = 0;
    } else if (valor > 100) {
      valor = 100;
    }
    setPorcentaje(valor); 
  };

  return (
    <div className="contenedor">
      <input
        type="number"
        value={porcentaje}
        onChange={handleChange}
        min="0"
        max="100"
        placeholder="Ingresa un porcentaje (1-100)"
      />
      <div className="barra">
        <div className="progreso-barra" style={{ width: `${porcentaje}%` }}>{porcentaje}%</div>
      </div>
    </div>
  );
};

export default Progreso;
