import { useReducer } from 'react';
import {createContext} from 'react';
import { pokemonReducer } from './PokemonReducer';
import { CAPTURE } from './PokemonReducer';
import { RELEASE } from './PokemonReducer';

export const PokemonContext = createContext();


export const PokemonProvider = (props) => {
  const defaultState = {
    capturedPokemons:[]
  };

  // const [pokemons, setPokemons] = useState([
  //   { id: 1, name: 'Bulbasaur' },
  //   { id: 2, name: 'Charmander' },
  //   { id: 3, name: 'Squirtle' }
  // ]);
  const [state, dispatch] = useReducer(pokemonReducer, defaultState);

  const capture = (pokemon) => () => {
    dispatch({ type: CAPTURE, pokemon });
  };

const release = (pokemon) => () => {
    dispatch({ type: RELEASE, pokemon });
  };

const { pokemons, capturedPokemons } = state;

const providerValue = {
  pokemons,
  capturedPokemons,
  release,
  capture
};

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};