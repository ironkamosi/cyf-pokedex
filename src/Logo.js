import React from "react";

const Logo = (props) => {
  console.log(props)
  // const appName = "Aaron's Pokedex";
  return (
    <div>
      <header>
        <h1>Welcome to {props.appName}</h1 >
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pokemon"/>
      </header>
    </div>
  )
}

export default Logo;


