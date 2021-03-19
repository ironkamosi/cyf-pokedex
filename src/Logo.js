import React from "react";

const Logo = (props) => {
  console.log(props)

  function logWhenClicked() {
    console.log("I am grateful")     
  }
  return (
    <div>
      <header>
        <h1>Welcome to {props.appName}</h1 >
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Pokemon"
          onClick={logWhenClicked}
        />
      
      </header>
    </div>
  )
}

export default Logo;



