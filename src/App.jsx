import { useState } from 'react'
import './App.css'

function App() {

let [isbuttondisable, setingsbuttondisable] = useState(false)

  return (
    <>
      <button className='boton' onClick={() => setingsbuttondisable(!isbuttondisable)}>
        {isbuttondisable ? "Ocultar" : "Mostrar"}
      </button>
      {isbuttondisable? <h1 className='texto'>BIENVENIDO</h1> : null }
    </>
  )
}

export default App
