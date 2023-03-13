import { useState } from 'react';
import './App.css';

function App() {
  const [fetchPokemonArray, setFetchPokemonArray] = useState([])
  const fetchpokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(response => {
        setFetchPokemonArray(response.results)
        console.log(response)
      })
      .catch(error => console.log(error))
  }
  return (
    <div className="App">
       <button onClick={fetchpokemon}>fetch Pokemon</button>
       {
        fetchPokemonArray.map(pokemon => {
          return (
             <ul>
              <li>{pokemon.name}</li>
             </ul>
         )
       })
       }
    </div>
  );
}

export default App;
