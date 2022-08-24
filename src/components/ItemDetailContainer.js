import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import GetProductos from "./ItemDetails";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    let idURL = useParams().id;
    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        GetProductos(idURL)
        .then(respuesta => setItem(respuesta))
        .catch(() => alert("No se encontro el producto"))
    }, []);

  return (
    <div>
        <ItemDetail categoria={item.category} id={item.id} title={item.title} stock={item.stock} description={item.description} img={item.img} initial={1}/>
    </div>
  )
}

export default ItemDetailContainer;