import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <div className="container">
                <dig className="row">
                    <div className="col">
                        <img src="" alt="Logo luciernaga" />
                    </div>
                    <div className="col">
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
                </dig>
            </div>
        </>
    )
}

export default NavBar