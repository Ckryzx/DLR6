import { Link } from "react-router-dom";
import { useCart } from "./pages/CartContext"

const Navbar = () => {
    const { totalCartPrice } = useCart();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mía</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/register">Registro</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/profile">Perfil</Link></li>
                        <li className="nav-item">
                            <Link className="btn btn-warning" to="/cart">🛒 Total: ${totalCartPrice}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

