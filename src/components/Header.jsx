import React from "react";
import '../styles/Header.css'
import gif from '../assets/logo2.0.gif';
import { Link } from "react-router-dom";

import { Menu } from "./Menu";

export const Header = ()=> {

    return(
        <header className='header'>
            <div className='Logo'>
                <img src={gif} alt="Logo-name" />
            </div>
            <nav className='nav-bar'>   
                <Link to="/">HOME</Link>
                <Link to="/personagens">PERSONAGENS</Link>
                <Link to="/sobreaserie">SOBRE A SÉRIE</Link>
                <Link to="/localizacao">LOCALIZAÇÕES</Link>
            </nav>
            <Menu />
        </header>
    );
}