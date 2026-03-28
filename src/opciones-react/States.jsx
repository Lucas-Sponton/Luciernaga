import { useState } from "react";

const States = () => {
    const [texto, setTexto] = useState("Curso de javascript");  // defini el estado
    const [contador, setContador] = useState(0);

    const modificarTexto = () => {  //modifique el estado
        setTexto("Curso de REACT JS");
    }

    return (
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="display-1">Estados / States</h1>
                    <p><button className="btn btn-primary" onClick={modificarTexto}>Modificar texto</button></p>
                    <p>{texto}</p>
                    <p><button className="btn btn-primary" onClick={() => setContador(contador + 1)}>Contador</button></p>
                    <p>Contador: {contador}</p>

                </div>
            </div>
        </div>
        </>
    )
}

export default States;