import React from 'react'
import img from '../../public/fondo-bodega.jpg'
import { useContext } from 'react'
import { CartContext } from './CartContext';
import {NavLink, Link} from "react-router-dom";


function CartWidget() {
  const { cart } = useContext(CartContext);
  
  if(cart.length > 0)
      return (
        <>
        <NavLink to={`/cart`} className='botones-navbar'><p><img src={img} className="logoCarrito" alt="10"></img>{cart.length}</p></NavLink>
        </>
      )
  else{
    
  }
}

export default CartWidget