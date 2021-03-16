import React from "react";


const BestPokemon = (props) => {
  console.log(props)
  // const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((ability, index) => {
          return (
            <li key={index}>{ability}</li>
          )
        })}
      </ul>
    </div>
  );
  
}





export default BestPokemon;
