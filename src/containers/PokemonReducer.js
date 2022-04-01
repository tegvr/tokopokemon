export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';

export const pokemonReducer = (state, action) => {
    const capturePokemon = (pokemon, state) => ({
        // pokemons: getPokemonsList(state.pokemons, pokemon),

        capturedPokemons: [...state.capturedPokemons, pokemon]
      });   
      
      const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
        capturedPokemons.filter(pokemon => (
         pokemon !== releasedPokemon)

        )
        // capturedPokemons
      
      const releasePokemon = (releasedPokemon, state) => ({
        // pokemons: [...state.pokemons, releasedPokemon],
        capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon)
      });

  switch (action.type) {
    case CAPTURE:
        console.log("berhasil disimpan");
      return capturePokemon(action.pokemon, state);
    case RELEASE:
        console.log("berhasil dilepas");
      return releasePokemon(action.pokemon, state);
    default:
        console.log("kembali state")
      return state;
  }
}
