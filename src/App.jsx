import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const [intervalo, setIntervalId] = useState(null);

  useEffect(() => {
    if (corriendo) {
      const id = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalo);
    }

    return () => {
      clearInterval(interval);
    };
  }, [corriendo]);

  function iniciarConteo() {
    setCorriendo(true);
  };

  function detenerConteo() {
    setCorriendo(false);
  };

  function restaurarConteo() {
    setSegundos(0);
  };

  return (
    <div>
      <h2 className='tiempo'>Tiempo</h2>
      <p>{Math.floor(segundos / 60)} minutos {segundos % 60} segundos</p>
      <button onClick={iniciarConteo} className='boton1'>Iniciar</button>
      <button onClick={detenerConteo} className='boton2'>Detener</button>
      <button onClick={restaurarConteo} className='boton3'>Restaurar</button>
    </div>
  );
};

export default App;
