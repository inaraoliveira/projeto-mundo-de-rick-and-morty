import React from "react";
import '../styles/Header.css'
import gif from '../assets/gifLogo';
import { Link } from "react-router-dom";


export const Header = ()=> {

    return(
        <header className='header'>
            <div className='Logo'>
                <img src={gif} alt="Logo-name" />
            </div>
            <nav className='nav-bar'>   
                <Link to="">HOME</Link>
                <Link to="">PERSONAGENS</Link>
                <Link to="">SOBRE A SÉRIE</Link>
                <Link to="">DETALHES DOS PERSONAGENS</Link>
            </nav>
            <button className='responsive-btn'>▽</button>
        </header>
    );
}