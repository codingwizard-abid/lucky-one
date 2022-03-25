import React, { useEffect, useState } from 'react';
import Ball from '../Ball/Ball';
import './Shop.css';


const Shop = () => {
   const [balls, setBalls] = useState([]);
   console.log(balls);
   useEffect(()=>{
      fetch('balls.json')
      .then(res => res.json())
      .then(data => setBalls(data))
   },[])
   const [cart, setCart] = useState([]);

   const handleAddToCart = (ball)=>{
      const cartItem = [...cart,ball];
      setCart(cartItem)
   }
   
   return (
      <div className='shop-container'>
         <div className="ball-container">
            {
               balls.map(ball => <Ball addToCart={handleAddToCart} key={ball.id} ball={ball}></Ball>)
            }
         </div>
         <div className="cart-container">
            <h2>Cart Summery</h2>
         </div>
      </div>
   );
};

export default Shop;