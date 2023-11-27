function PokemonCard({ pokemon }) {
    const { imgSrc, name } = pokemon;
    console.log(pokemon);


    return (
        <figure>
            {imgSrc ?
                <img src={imgSrc} alt={pokemon.name} />
                : <p>???</p>}

            <figcaption>{name}</figcaption>
        </figure>
    );
}



export default PokemonCard;

