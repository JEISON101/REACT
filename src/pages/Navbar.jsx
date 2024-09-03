import { Outlet,Link } from "react-router-dom";

const Navbar = () => {
    return ( 
    <div>
        <div>
            <Link to="/"><button className="enviar" >Enviar</button></Link>
        </div>
        <Outlet/>
    </div>
    )
}
export default Navbar;