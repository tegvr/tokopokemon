import React from "react";
import '../index.css';

var url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+Math.floor(Math.random()*100)+".png";

const Banner = () => (
    <div className="tkp-banner">
        <div className="tkp-banner-items">
            <div className="tkp-banner-img">
                <img alt="refresh" src={url} title="Refresh to Change Pokemon"></img>
            </div>
            <div className="tkp-banner-txt">
            Pokémon is a series of video games developed by Game Freak and published by Nintendo and The Pokémon Company under the Pokémon media franchise.
                <div className="tkp-banner-btn">
                    <a href="https://tegvr.com" target="_blank" rel="noreferrer" className="tkp-banner-a">Read More</a>
                </div>
            </div>
        </div>
    </div>
)

export default Banner;