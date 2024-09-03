import './App.css';
import {Routes, Route} from "react-router-dom";
import Enviar from "./pages/navbar";
import Enviar from "./pages/submit";

function App() {

  return (
    <div>
      <h1>hola, ingresa tu nombre y edad</h1>
      <br />
      <input type="text" placeholder='Nombre' />
      <br />
      <input type="number" placeholder='Edad' />
      <Routes>
        <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Enviar />}/>
        </Route>
      </Routes>      
    </div>
    
  );
}
export default App;