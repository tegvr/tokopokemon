import React, { useEffect } from 'react';

import { useContext } from 'react'; 
import {PokemonContext} from '../containers/PokemonContext';

    

export function PokemonDetails({pokemon}){

    const{
        capturedPokemons,
        capture
    } = useContext(PokemonContext);

    var isCaptured = false;
    // const message = "gagal";

    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemon.id+".png";

    // function catchPokemon(data){
        
    //     setMyPokemons([...pokemons,data])
    //     console.log(pokemons);
    // }
    function Abilities(data){
        return <div className='tkp-abs-item'>
            <i class="fa-solid fa-bolt"></i>
            {data.data.ability.name}</div>
    }
    function Moves(data){
        return <div className='tkp-moves-item'>
            <i class="fa-solid fa-compress"></i>
            {data.data.move.name}</div>
    }
    function CaptureAttempt(){
        if(probability(.50)){
            capture(pokemon);
            
            console.log("berhasil");
            console.log(pokemon);
            
            isCaptured = true;
        }else{
            console.log("tidak sberhasil");
        }
    }
    function probability(n){
        // return Math.random() < n;
        return 1;
    }

    return (
        <div>
        { !isCaptured ? 
            (
                <div className='tkp-details'>
                    <div className='tkp-details-cover'>
                        <div className='tkp-details-title'>{pokemon.name}</div>
                        <div className='tkp-cover-btn-cont'>
                            <a onClick={
                                // CaptureAttempt()
                                capture(pokemon)
                                } className='tkp-cover-btn'>Catch</a>
                        </div>
                        <img className="tkp-details-img" src={imgUrl}/>
                    </div>
                    <div className='tkp-details-desc'>
                        <div className='tkp-pok-row'>
                            <div className='tkp-pok-row-title'> Abilities </div>
                            <div className='tkp-pok-list ddd'>
                            { 
                                pokemon.abilities.map((data) => <Abilities data={data} /> ) 
                            }
                            </div>
                        </div>
                        <div className='tkp-pok-row'>
                            <div className='tkp-pok-row-title'> Moves </div>
                            <div className='tkp-pok-list tkp-list-mov'>
                            { 
                                pokemon.moves.map((data) => <Moves data={data} /> ) 
                            }
                            </div>
                        </div>
                                        
                    </div>
                </div> 
            ) 
            : 
            (
            <div>
                <h1>form</h1><br/>
                <h1>form</h1><br/>
                <h1>form</h1><br/>
                <h1>form</h1><br/>
                <h1>form</h1><br/>
                <h1>form</h1><br/>
            </div>
            )
        }
        
        </div>
    );
 };


export default PokemonDetails;
