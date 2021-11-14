import React from "react";
import '../styles/Header.css'
import gif from '../assets/logo2.0.gif';
import { NavLink } from "react-router-dom";

import { Menu } from "./Menu";

export const Header = ()=> {

    return(
        <header className='header'>
            <div className='Logo'>
                <img src={gif} alt="Logo-name" />
            </div>
            <nav className='nav-bar'>   
                <NavLink activeStyle={{color: 'chartreuse'}} exact to="/">HOME</NavLink>
                <NavLink activeStyle={{color: 'chartreuse'}} to="/personagens">PERSONAGENS</NavLink>
                <NavLink activeStyle={{color: 'chartreuse'}} to="/sobreaserie">SOBRE A SÉRIE</NavLink>
                <NavLink activeStyle={{color: 'chartreuse'}} to="/localizacao">LOCALIZAÇÕES</NavLink>
            </nav>
            <Menu />
        </header>
    );
}