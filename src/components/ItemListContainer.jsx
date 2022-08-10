import React, {useState, useEffect} from "react";
import data from "../../data/data";
import Productos from "./Productos";
import Card from "../components/Card";

function traerProducto(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(data), 1500);    
    });
}

const ItemListContainer = () =>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        traerProducto()
        .then((respuesta) => {
            setProducts(respuesta);
        })
        .catch((error) => {
            console.log(error);
            });

            
         }, []);
        
    return (
        <div className="container mx-auto mt-5">
            
            {products.map((item) => {
                return (
                    <Card 
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        img={item.img}
                    />
                );
            })}
            <h1>{greeting}</h1>
        </div>
    );
    
};

export default ItemListContainer;