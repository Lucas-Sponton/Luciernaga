import CartWidget from "./CartWidget"
import Logo from "./Logo"

const NavBar = () => {
    return (
        <>
            <div className="container sticky-top">
                <div className="row">
                    <div className="col text-start px-0 pt-2">
                        <Logo />
                    </div>
                    <div className="col align-self-center">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Hombre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Mujer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Niños</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col text-end">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar