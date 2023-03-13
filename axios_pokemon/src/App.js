import axios from 'axios'
import { useState } from 'react';
import './App.css';

function App() {
  const [axiosPokemonArray, setAxiosPokemonArray] = useState([])
  const axiosPokemon = ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response=> {
      setAxiosPokemonArray(response.data.results)
      console.log(response.data)
    }).catch(error=>console.log(error))
  }
  return (
    <div className="App">
      <button onClick={axiosPokemon}>axios Pokemon</button>
     {
            axiosPokemonArray.map(pokemon => {
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
