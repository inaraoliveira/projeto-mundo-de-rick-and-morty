import React from "react";

export const Card = (image) => {
    return(
        <div className='card'>
            <img src={image.cardImage} alt={image.imageDis} />
        </div>
    )
}   