// NavBar.jsx gère l'affichage des boutons "précédent" et "suivant"


function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {

  const handleClickPrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }

  }

  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  }


  return (
    <nav>
      {
        pokemonIndex > 0 && (
          <button onClick={handleClickPrevious}>Précédent</button>
        )
      }


      {
        pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleClickNext}>Suivant</button>
        )
      }
    </nav>
  )
}


export default NavBar;

