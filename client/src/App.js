import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(1)
  const [pokemon, setPokemon] = useState({
    pokemonName: '',
    pokemonImgUrl: '',
    pokemonTypes: [],
    pokemonHeight: 0,
    pokemonWeight: 0,
    pokemonAbilties: []
  })

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
    .then(res => res.json())
    .then(data => {
      const result = {}
        result.pokemonName = data.name
        result.pokemonHeight = data.height
        result.pokemonWeight = data.weight
        result.pokemonImgUrl = data.sprites.front_default
        result.pokemonTypes = data.types.map((item) => item.type.name)
        result.pokemonAbilties = data.abilities.map((item) => item.ability.name)

      setPokemon(result)
    })
      console.log([pokemon, pokemonIndex])
  }
  , [pokemonIndex])

  return (
    <div className="app">
      <nav className="nav">Pokemon idex</nav>
      <div className="box">
        <button onClick={() => pokemonIndex > 1? setPokemonIndex(pokemonIndex - 1) : setPokemonIndex(905)} className="button">Prev</button>
        <div className="pokemonInfo" id="image">
          <div className="image">
          <img src={pokemon.pokemonImgUrl}></img>
          </div>
          <div className="pokemonDescription">
            <div className="info1">
              <p> <span id="attr">Name:</span> {pokemon.pokemonName}</p>
              <p> <span id="attr">Types:</span> {pokemon.pokemonTypes.join(", ")}</p>
              <p> <span id="attr">Abilities:</span> {pokemon.pokemonAbilties.join(', ')}</p>
            </div>
            <div className="info2">
              <p> <span id="attr">Height:</span> {pokemon.pokemonHeight} </p>
              <p> <span id="attr">Weight:</span> {pokemon.pokemonWeight}</p>
              <p> <span id="attr">id:</span> {pokemonIndex}</p>
            </div>
          </div>
        </div>
        <button onClick={() => pokemonIndex < 905? setPokemonIndex(pokemonIndex + 1): setPokemonIndex(1)} className="button">Next</button>
      </div>
    </div>
  );
}

export default App;