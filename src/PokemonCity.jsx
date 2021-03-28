import React, { useState } from "react";

function PokemonCity() {
    const [city, setCity] = useState("");
    
function updateCity(event) {
    setCity(event.target.value)
}
  return (
    <div>
          <input type="text" value={city} placeholder="Name of city" onChange={updateCity} />
      <p>Welcome to the city of {city.toUpperCase()}</p>
    </div>
  );
}

export default PokemonCity;
/*
8. Change the updateCity component so that it has a parameter named event.
9. Add a console.log to inspect the value of event.target.value. What happens when you type in the input?
10. Using setCity, update the city state to what was typed in the input box.
7. Create a function within the component called updateCity. Pass this function to the onChange event handler.


*/