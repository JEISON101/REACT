import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Inicio from "./pages/inicio";
import Jeison from "./pages/jeison";
import Bmx from "./pages/bmx";

function App() {
  
  return (
    <div>
      <h1 className='hello'>HELLO REACT ROUTER</h1>
      
      <Routes>
        <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Inicio />}/>
        <Route path='jeison' element={<Jeison />}/>
        <Route path='bmx' element={<Bmx />}/>
        </Route>
      </Routes>      
    </div>
    
  );
}

export default App;