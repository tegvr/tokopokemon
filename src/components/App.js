import React, {useState,useReducer} from 'react';
import {BrowserRouter, Route,Routes, Switch} from 'react-router-dom';
import { PokemonsCont } from '../containers/PokemonsCont';
import Header from './Header';
import Banner from './Banner';
import Mypokemon from './Mypokemon';
import DetailsCont from '../containers/DetailsCont';
import { PokemonProvider } from '../containers/PokemonContext';

function App(){
    return (
      <div>
        <BrowserRouter>
          <PokemonProvider>
          <Header/>
          {/* <Banner/> */}
          <Routes>
            <Route path="/" element={[<Banner/>,<PokemonsCont  />]}/>
            <Route path="/mypokemon" element={<Mypokemon/>}/>
            <Route path="/:name" element={< DetailsCont />}/>
          </Routes>
          {/* <PokemonsCont/> */}
          </PokemonProvider>
        </BrowserRouter>
      </div>
    );
 };

 

export default App;
