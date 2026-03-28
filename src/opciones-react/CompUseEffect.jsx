import { useEffect, useState } from "react";


const CompUseEffect = () => {
    const [contador, setContador] = useState(0);

    const Incrementar =() => {
        setContador(contador + 1);
    }

    /* useEffect(() => {
        console.log("#2 - Actualizacion del componente");
    }, []); //Opcion #1 - Sin array de dependencias de estados ( se ejecuta una sola vez) */

    useEffect(() => {
        console.log("#2 - Actualizacion del componente");
    }, [contador]); //Opcion #2 - Se ejecutara cada vez que se produce un cambio en el estado contador.

    console.log("#1 Montaje del componente");

    return (
        <div>

            <h1>UseEffect</h1>
            <p>Contador: {contador}</p>
            <p><button onClick={Incrementar}>Incrementar (+)</button></p>
        </div>
    )
}

export default CompUseEffect;