import React, {useEffect, useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "./CartContext"

const CartWidget = () => {
        const { cart, qnt, setQnt } = useContext(CartContext);
      
        useEffect(() => {
          if (cart.length === 0) {
            setQnt(0);
          }
        }, [cart, setQnt]);

    return(
        
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />

       
    );
}

export default CartWidget;