import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState(''); 
  const [elementos, setElementos] = useState([]); 

  const agregar = () => {
    if (inputValue.trim() !== '') {
      setElementos([...elementos, inputValue]); 
      setInputValue(''); 
    }
  };

  const eliminar = (index) => {
    const nuevosElementos = elementos.filter((_, i) => i !== index);
    setElementos(nuevosElementos); 
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ciudad"
      />
      <button onClick={agregar}>Agregar</button>

      <h2>Ciudades</h2>
      
      <ul>
        {elementos.map((elemento, index) => (
          <li key={index}>
            {elemento}
            <button className='eliminar' onClick={() => eliminar(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
