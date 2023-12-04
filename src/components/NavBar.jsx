import React from "react";
function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  // const handleClick = () => {
  //   setPokemonIndex(index)
  // }


  return (

    <nav>
      {
        pokemonList.map((pokemon, index) => (
          <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
            {pokemon.name}
          </button>
          //   <button key={index} onClick={handleClick}>
          //   {pokemon.name}
          // </button>
        ))
      }
    </nav >

  )
}


export default NavBar;

