import { NavLink } from "react-router-dom";

const NavBarCategorias = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink to="/hombre" className="nav-link categorias__link--estilos">
                    Hombre
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/mujer" className="nav-link categorias__link--estilos">
                    Mujer
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/niños" className="nav-link categorias__link--estilos">
                    Niños
                </NavLink>
            </li>
        </ul>
    );
};

export default NavBarCategorias;