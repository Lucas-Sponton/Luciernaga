// Ejemplo #1 recibo una prop como objero)

/* const Props = (prop) => {
    return (
        <>
        <h1>{prop.titulo + " - " + prop.curso}</h1>
        <h3>{prop.curso}</h3>
        </>
    )
} */

    // Ejemplo #2 => recibo una prop y la desestructuro

    const Props = ({ titulo, curso }) => {
        return (
            <>
            <h1>{titulo + " - " + curso}</h1>
            <h3>{curso}</h3>
            </>
        )
    }

export default Props;