import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_POKEMONS} from '../graphql/getPokemons';
import {PokemonItems} from '../components/PokemonItems';

export function PokemonsCont(){
   

    const gqlVariables = {
        limit: 10,
        offset: 0,
      };
    
      const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables
      });
    
        if (loading) return 'Loading....';
        if (error) return `Error! ${error.message}`;
    
    return (
        <div className='tkp-grid'>
            {
             data.pokemons &&
             data.pokemons.results.map((pokemon,index) =>  <PokemonItems key={index} pokemon={pokemon}/> )
            }
        </div>
    );
}