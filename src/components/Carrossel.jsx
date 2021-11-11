import React from "react";
import Carousel from 'react-elastic-carousel';
import { Card } from "./Card_Image";


import image1 from '../assets/galeria/Arma.png';
import image2 from '../assets/galeria/Familia.jpeg';
import image3 from '../assets/galeria/FamiliaSmith.png';
import image4 from '../assets/galeria/Guerra.jpg';
import image5 from '../assets/galeria/Guerra2.jpg';
import image6 from '../assets/galeria/Caos.jpg';
import image7 from '../assets/galeria/Cerebro.jpeg';
import image8 from '../assets/galeria/HomemPassaro.jpg';
import image9 from '../assets/galeria/Meeseek.png';
import image10 from '../assets/galeria/Rick.jpeg';
import image11 from '../assets/galeria/RickMortySummer.jpg';
import image12 from '../assets/galeria/Rickverso.jpg';
import image13 from '../assets/galeria/RickVibe.png';



export default function Carrossel(){

    return(
        <div className='carrossel'>
            <Carousel>
                <Card cardImage={image1} imageDis='Arma' />
                <Card cardImage={image2} />
                <Card cardImage={image3} />
                <Card cardImage={image4} />
                <Card cardImage={image5} />
                <Card cardImage={image6} />
                <Card cardImage={image7} />
                <Card cardImage={image8} />
                <Card cardImage={image9} />
                <Card cardImage={image10} />
                <Card cardImage={image11} />
                <Card cardImage={image12} />
                <Card cardImage={image13} />
            </Carousel>
        </div>
    );
}