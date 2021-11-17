import React from "react";
import '../styles/Footer.css';
import { Link } from 'react-router-dom'

export const Footer = ()=> {

    return(
        <section className='footer-container'>
            <Link to='/criadores'>CONTATO DOS CRIADORES</Link>
        </section>
    );
}