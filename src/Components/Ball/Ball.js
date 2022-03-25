import React from 'react';
import './Ball.css';
import { BsCartCheck } from "react-icons/bs";

const Ball = ({ball, addToCart}) => {
   const {name, image, price} = ball;
   return (
      <div className='card'>
         <div className="img-box">
            <img src={image} alt={name} />
         </div>
         <div className="ball-info">
            <h2>{name}</h2>
            <p>Price: {price}</p>
         </div>
         <button onClick={()=> addToCart(ball)} className='cart-btn'>Add to cart <span><BsCartCheck/></span></button>
      </div>
   );
};

export default Ball;