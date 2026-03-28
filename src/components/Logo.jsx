import logo from "../../public/logo-luciernaga-3.svg";

function Logo() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button onClick={scrollToTop} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img src={logo} alt="Logo Luciérnaga" width={200}  />
        </button>
    );
}

export default Logo;