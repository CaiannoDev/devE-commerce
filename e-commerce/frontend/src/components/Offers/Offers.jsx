import '../Offers/Offers.css';
import React from 'react';
import exclusive_image from '../assets/exclusive_image.png'



function Offers(){
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusivo</h1>
                <h1>Ofertas para Você</h1>
                <p>DESCUBRA O SEU ESTILO DE SER LIVRE.</p>
                <button>Check Now</button>
            </div> 

            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>

        </div>
    )
}

export default Offers;