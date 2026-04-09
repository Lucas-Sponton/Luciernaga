import { NavLink } from "react-router-dom";
import logo from "../../public/logo-luciernaga-3.svg";

function Logo() {
    return (
        <NavLink to="/" style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img src={logo} alt="Logo Luciérnaga" width={200} />
        </NavLink>
    );
}

export default Logo;