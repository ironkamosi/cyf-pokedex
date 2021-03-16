import React from "react";

const CaughtPokemon = (props) => {
    console.log(props)
    // let date = new Date().toLocaleDateString();
    return (
        <div>
            <p>
                Caught 0 Pokemon on {props.date}
            </p>
        </div>
    )
}

export default CaughtPokemon;
