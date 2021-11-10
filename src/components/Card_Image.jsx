import React from "react";

export const Card = (image) => {
    return(
        <div className='cardGaleria'>
            <img src={image.cardImage} alt={image.imageDis} />
        </div>
    )
}   