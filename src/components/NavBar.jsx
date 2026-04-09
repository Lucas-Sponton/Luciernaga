import CartWidget from "./CartWidget"
import Logo from "./Logo"
import NavBarCategorias from "./NavBarCategorias"


const NavBar = () => {
    return (
        <>
            <div className="container sticky-top">
                <div className="row">
                    <div className="col text-start px-0 pt-2">
                        <Logo />
                    </div>
                    <div className="col align-self-center categorias">
                        <NavBarCategorias />
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