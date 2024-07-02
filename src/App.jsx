import { useState } from 'react'
import './App.css'

function App() {

let [isbuttondisable, setingsbuttondisable] = useState(false)

  return (
    <div className='contenedor'>
      <button className='boton' onClick={() => setingsbuttondisable(!isbuttondisable)}>
        {isbuttondisable ? "Ocultar" : "Mostrar"}
      </button>
      {isbuttondisable? <h1 className='texto'>BIENVENIDO</h1> : null }
    </div>
  )
}

export default App
