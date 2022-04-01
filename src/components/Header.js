import React from "react";
import '../index.css';
import { Outlet,Link,Route } from 'react-router-dom';
import Mypokemon from "./Mypokemon";

const Header = () => (
    <div className="tkp-header">
        <div className="tkp-header-left">
            <Link to="/" className="tkp-header-logo">
                tokopokemon
            </Link>
        </div>
        <div className="tkp-header-right">
            <Link to="/mypokemon" className="tkp-header-btn">
            <span className="fa-solid fa-masks-theater"></span>
                My Pokemon
            </Link>
            
        </div>  
        <Outlet />
    </div>  
)

export default Header;