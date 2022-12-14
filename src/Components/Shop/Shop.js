import React, { useEffect, useState } from 'react';
import Ball from '../Ball/Ball';
import Cart from '../Cart/Cart';
import './Shop.css';


const Shop = () => {
   const [balls, setBalls] = useState([]);

   // load data form json
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

   const [myOne, setMyOne] = useState([]);

   // handle choose for me button
   const chooseForMe = (cart)=>{
      const randomNum = Math.floor(Math.random() * 4);
      const myChoosen = cart[randomNum];
      setMyOne(myChoosen);
   }

   let addMyOne;
   if(myOne){
      addMyOne = myOne.name;
   }

   // handle choose again button
   const chooseAgain = (cart)=>{
      const newCart = cart=[];
      setCart(newCart);
   }

   return (
      <div className='shop-container'>
         <div className="ball-container">
            {
               balls.map(ball => <Ball addToCart={handleAddToCart} key={ball.id} ball={ball}></Ball>)
            }
         </div>
         <div className="cart-container">
            <h2>Selected Items</h2>
            {
               cart.map(item => <Cart key={item.id} cartItem={item}></Cart>)
            }

            <div className='button-wrap'>
               <button onClick={()=> chooseForMe(cart)} className='choose-btn choose-me'>CHOOSE 1 FOR ME</button> <br />
               <button onClick={()=>chooseAgain(cart)} className='choose-btn choose-again'>CHOOSE AGAIN</button>
            </div>
            <h2 style={{color: 'green'}}>You should play with: <em>{addMyOne}</em></h2>
         </div>
      </div>
   );
};

export default Shop;