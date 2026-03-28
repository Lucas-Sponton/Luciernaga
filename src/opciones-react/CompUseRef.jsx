import { useRef, useState } from "react";



const CompUseRef = () => {
    const [academia, setAcademia] = useState("Udemy");
    const divRef = useRef(null);
    const modificarTextos = () => {
        setAcademia("CoderHouse");
        divRef.current.innerHTML= "Curso de React JS";
        //divRef.current.className = "bg-danger text-white p-2 rounded";
    }

    return(
        <div>
        <h1>UseRef</h1>
        <p>{academia}</p>
        <p ref={divRef}>Curso de JavaScript</p>
        <p><button onClick={modificarTextos}>Modificar texto</button></p>
        </div>
    )
}

export  default CompUseRef;