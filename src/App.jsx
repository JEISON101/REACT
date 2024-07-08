import React, { useState } from 'react';
import './App.css'; 

 
const persona = {
  usuario: "",
  nombre: "",
  edad: ""
};

export default function App() {
  const [form, setValues] = useState(persona);
  const [display, setDisplay] = useState(false);

  const printValues = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  const updateField = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={printValues}>
      <div>
        <label htmlFor="Usuario">
          Usuario:
          <input
            value={form.usuario|| ""}
            name="usuario"
            onChange={updateField}
          />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="Nombre">
          Nombre:
          <input
            value={form.nombre || ""}
            name="nombre"
            type="text"
            onChange={updateField}
          />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="Edad">
          Edad:
          <input value={form.edad || ""} name="edad" type='number' onChange={updateField} />
        </label>
      </div>
      <br />
      <button>Enviar</button>
      {display && (
        <>
          <h4>Información</h4>
          <ul>
            <li>Usuario: {form.usuario.toUpperCase()}</li>
            <li>Nombre: {form.nombre.toUpperCase()}</li>
            <li>Edad: {form.edad}</li>
          </ul>
        </>
      )}
    </form>
  );
}
