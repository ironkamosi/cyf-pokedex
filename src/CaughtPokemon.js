import React, { useState } from "react";

const CaughtPokemon = (props) => {
  //   console.log(props)

  const pokemonCaught = [
    "Rayquaza",
    "Garchomp",
    "Sylveon",
    "Umbreon",
    "Charizard",
    "Mimikyu",
    "Lucario",
    "Greninja",
  ];// pokemonCaught[Math.random(pokemonCaught.length)]
  const [caught, setCaught] = useState([...pokemonCaught]);
  
  function CatchPokemon() {
    if (pokemonNameInput) {
          setCaught((caught) => caught.concat(pokemonNameInput));
      setPokemonNameInput("");

    }
    // console.log(caught)
    // setCaught(Math.floor(Math.random(100)*100))
  };

  // const CatchPokemon = () => {
  //   setCaught(caught.concat(pokemonNameInput));
  //   console.log(caught)
  //   // setCaught(Math.floor(Math.random(100)*100))
  // };
  // // let date = new Date().toLocaleDateString();

  const [pokemonNameInput, setPokemonNameInput] = useState("")
  function handleInputChange(event) {
    setPokemonNameInput(event.target.value)
    
  } 
  return (
    <div >
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}>{pokemon}</li>;
        })}
      </ul>
      <input type="text" placeholder="Type text" value={pokemonNameInput.concat()} onChange={handleInputChange}/>
      
      <button onClick={CatchPokemon}>
        Catch a Pokemon
      </button>
    </div>
  );
};

export default CaughtPokemon;
/**
 1. Open the pokedex React application again and open the src/CaughtPokemon.js file.
2. Render an <input> before the <button> (hint: <input type="text" />).
3. Create a new state variable called pokemonNameInput and initialise to an empty string ("").
4. Add a value attribute to the <input> which is set to the pokemonNameInput state variable. (Hint: value={pokemonNameInput})
5. Create a new handleInputChange function within the component.
6. Add a onChange handler to the <input> that will call handleInputChange.
7. Add a parameter called event to the handleInputChange function. Set the pokemonNameInput state variable to event.target.value. Try typing in the <input> again. What happens now?
8. Change the catchPokemon function to add the pokemonNameInput state to the caught array (hint: change the value that we are passing to the concat method)
9. Open your browser, type a Pokemon name into the <input> and click on the "Catch Pokemon" button. Do you see your new Pokemon being added to the list?
10. Empty the <input> after clicking on the button. To do this, set the state of pokemonNameInput to an empty string "" after we have added it to the caught array in the catchPokemon function.
11: (STRETCH GOAL) Make sure the user cannot add a Pokemon to the caught state if the value of pokemonNameInput state is empty.
 */