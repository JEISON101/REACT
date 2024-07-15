import { Outlet,Link } from "react-router-dom";

const Navbar = () => {
    return ( 
    <div>
        <div>
            <Link to="/" className="opciones">inicio</Link>
            <Link to="/Jeison" className="opciones">jeison</Link>
            <Link to="/Bmx" className="opciones">bmx</Link>
        </div>
        <Outlet/>
    </div>
    )
}
export default Navbar;