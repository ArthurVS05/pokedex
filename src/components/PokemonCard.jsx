import React from "react";
import PropTypes from 'prop-types';

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

PokemonCard.propTypes = {

    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.img,
    }).isRequired,

}


export default PokemonCard;

