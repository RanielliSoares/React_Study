const Events = () => {
    const handleMyEvent = (e) => {
        alert("Ativou" )
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
                <button onClick={ () => alert("Clicou também")}>Clique Aqui também</button>
            </div>
        </div>
    )
}

export default Events;