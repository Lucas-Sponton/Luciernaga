const CompChildren = ({texto, children}) => {
    return (
        <div>
            <h1>{texto}</h1>
            {children} 
        </div>
    )
}

export default CompChildren;