import { useContext } from 'react'
import { CartContext } from './cartContext';
import CartItem from './CartItem';
import {NavLink, Link} from "react-router-dom";
import UserForm from './Form';


function Cart() {
    const { cart, addToCart, removeItem, deleteAll } = useContext(CartContext);
    
    const total = []

    

    function removeItemCart(id){
        removeItem(id)
    }

    cart.forEach(function (arrayItem) {
        var x = arrayItem.price * arrayItem.click;
        total.push(x);
    });

    const totalFinal = total.reduce((acumulador, b) => acumulador + b, 0)
    

    if (cart.length === 0) {
        return (
            <div className='no-products'>
                <div>
                <p><h1>Lamentablemente no tiene ningun producto agregado</h1></p>
                <p><NavLink to={`/`} className='boton-no-products'>Inicio para comprar productos</NavLink></p>
                </div>
            </div>
            
            
        )
    }
    else {
        return (
            <div >
                <div >
                    {cart.map((item) => {
                        return (
                            <CartItem
                            key={item.id + item.name}
                            id={item.id}
                            img={item.pictureUrl}
                            name={item.name}
                            price={item.price}
                            amount={item.click}
                            removeItemCart= {removeItemCart}
                            />
                        )
                    })}
                    <p className='boton-no-products'>Total de su compra: ${totalFinal}</p>
                    <button  className="delete-all" onClick={deleteAll}> Vaciar Carrito </button>
                </div>
                <div className='cards'>
                    <div className='div-cards'>
                    <UserForm cart={cart} total={totalFinal}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart 
