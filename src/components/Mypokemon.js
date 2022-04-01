import React, { useContext } from 'react';
import { PokemonContext } from '../containers/PokemonContext';

const Mypokemon=()=> {
    
    const {
        capturedPokemons,
        release
      } = useContext(PokemonContext);

    // const releasePokemon = (releasedPokemon) =>
    //   pokemons.filter((pokemon) => pokemon !== releasedPokemon);
  
    // const release = (pokemon) => () => {
    //   setMyPokemons(releasePokemon(pokemon));
    // //   setPokemons([...pokemons, pokemon]);
    // };
    const pokLength = capturedPokemons.length ? (capturedPokemons.length) : 0;
      console.log('my page');
    return (
    <div className="tkp-myp-cont">
        <div className="tkp-myp-cover">
            <div className="">My Pokemons
            
            </div>
            <div className="tkp-myp-badge">
                {
                    pokLength    
                }
            </div>
        </div>
        {
             capturedPokemons.map((pok,index) => 
             <div className="tkp-myp">
             <div className="tkp-myp-left">
                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"></img>
             </div>
             <div className="tkp-myp-right">
                 <div className="tkp-myp-nickname">{pok.id}</div>
                 <div className="tkp-myp-origin">{pok.name}</div>
             </div>
             <div className="tkp-myp-btn">
                     <a onClick={
                         release(pok)
                     } className="tkp-rel-btn">Release</a>
             </div>
         </div>
            )
        }

    </div>
    );
  }


  export default Mypokemon;