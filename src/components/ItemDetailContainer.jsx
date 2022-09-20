import React from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){
    console.log(useParams());

    let itemsData = [

    ];

    return (
        <div>
            <h1>Detalle del producto</h1>
            <div>
                <h3>producto 1</h3>
                <img src="../Cerveza.png" alt="producto 1" />
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                <h4>Precio: $1000</h4>
            </div>
        </div>
    );
}

export default ItemDetailContainer;