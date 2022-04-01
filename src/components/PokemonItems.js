import React from 'react';
import {Link} from 'react-router-dom';
 

export function PokemonItems({pokemon}){
    return (
        <div className='tkp-grid-item'>
        {
                    <Link to={pokemon.name}>
                    <img alt="pokemon" className='tkp-grid-item-img' src={pokemon.image}></img>
                    <div className='tkp-grid-item-txt'>
                        {pokemon.name}
                    </div>
                    </Link>
        }
        </div>
    );
 };



export default PokemonItems;
