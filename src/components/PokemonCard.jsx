function PokemonCard() {
    const pokemon = pokemonList[0];

    return (
        <figure>
            <figcaption>{pokemon.name}</figcaption>
            {pokemon.imgSrc ? ( <img src={pokemon.imgSrc} alt={pokemon.name} />)
            : (<p>???</p>)}

        </figure>
    );
}

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

export default PokemonCard;



// dans la fonction "PokemonCard", créer variable "pokemon".
// "pokemon" contient le 1er Pokémon du tableau "pokemonList"
// Utiliser pokemon.name et pokemon.imgSrc pour remplacer texte & attributs fixes de l'affichage
// Afficher l'image : 
// si pokemon.imgSrc est défini, afficher image avec la balise <img>
// sinon, afficher <p> ???
// utiliser ?:
// Changement de Pokémon : 

