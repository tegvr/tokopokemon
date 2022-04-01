import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_POKEMON_DETAILS} from '../graphql/getDetails';
import { useParams } from 'react-router-dom'
import {PokemonDetails} from '../components/PokemonDetails';

function DetailsCont(){
  const { name } = useParams();
  const gqlVariables = {
    name : name
  };

  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    variables: gqlVariables
  });

    if (loading) return 'Loading....';
    if (error) return `Error! ${error.message}`;

  return (
    <PokemonDetails pokemon={data.pokemon}/>
  );
 };

export default DetailsCont;
