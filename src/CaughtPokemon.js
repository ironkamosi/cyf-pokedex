import React,{useState} from "react"

const CaughtPokemon = (props) => {
    console.log(props)
    const [caught, setCaught] = useState(0);
    const CatchPokemon = () => {
    //    setCaught(caught + 1)
        setCaught(Math.floor(Math.random(100)*100))
    };
    // let date = new Date().toLocaleDateString();
    return (
        <div>
            <p>
                Caught {caught} Pokemon on {props.date}
            </p>
            <button onClick={CatchPokemon}><h3>Catch a Pokemon</h3></button>
        </div>
    )
}

export default CaughtPokemon;
