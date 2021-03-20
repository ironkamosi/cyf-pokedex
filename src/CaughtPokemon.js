import React, { useState } from "react";

const CaughtPokemon = (props) => {
  //   console.log(props)

//   const pokemonCaught = [
//     "Rayquaza",
//     "Garchomp",
//     "Sylveon",
//     "Umbreon",
//     "Charizard",
//     "Mimikyu",
//     "Lucario",
//     "Greninja",
//   ];// pokemonCaught[Math.random(pokemonCaught.length)]
  const [caught, setCaught] = useState([]);
  const CatchPokemon = () => {
    setCaught(caught.concat("Garchomp"));
    // setCaught(Math.floor(Math.random(100)*100))
  };
  // let date = new Date().toLocaleDateString();
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}>{pokemon}</li>;
        })}
      </ul>
      <button onClick={CatchPokemon}>
        <h3>Catch a Pokemon</h3>
      </button>
    </div>
  );
};

export default CaughtPokemon;
