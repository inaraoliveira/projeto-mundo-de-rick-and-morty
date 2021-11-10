import React from "react";
import '../styles/GaleriaDeFotos.css'
import Carrossel from "./Carrossel.jsx";


export const GaleriaDeFotos = () => {
    return(
        <div className='cont'>
            <section id='contGaleria'>
                <div className='navGaleria'>
                    <h4 id='navSobre'>Sobre a série</h4>
                    <h4 id='navFotos'>Galeria de fotos</h4>
                </div>
                <Carrossel />
            </section>
        </div>
    )
}