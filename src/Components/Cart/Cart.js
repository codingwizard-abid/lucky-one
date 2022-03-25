import React from 'react';
import './Cart.css';

const Cart = ({cartItem}) => {
   const {image, name} = cartItem;
   return (
      <div>
         <div className="single-ball">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
         </div>
      </div>
   );
};

export default Cart;