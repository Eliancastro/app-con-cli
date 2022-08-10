import React from "react";
import Productos from "./Productos";

const ItemList = (props) => {
    return (
        <div>
            {props.data.map((product) =>{
                return(
                    <Productos
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    />
                );
            })}
        </div>
    );
};

export default ItemList;