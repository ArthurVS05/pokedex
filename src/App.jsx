import PokemonCard from "./components/PokemonCard"
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const pokemonList = [
    {

      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

    },

    {

      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

    },

    {

      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

    },

    {

      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

    },

    {

      name: "mew",

    },
  ];

  return (
    <div>

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      <button onClick={handleClickPrevious}>
        {pokemonIndex > 0 ? '' : ''}
        Précédent</button>
      <button onClick={handleClickNext}>{pokemonIndex < pokemonList.length - 1 ? '' : ''}
        Suivant</button>
    </div>
  );


}


export default App
