const Challenge = () => {

    const a = 60;
    const b = 100;

    const calcular = () => {
        const c = a + b; 
        alert("Resultado: " + c)
    }
    return (
        <div>
            <h2>Valor A: {a}</h2>
            <h2>Valor b: {b}</h2>
            <button onClick={calcular}>Calcular</button>
        </div>
    )
}
export default Challenge