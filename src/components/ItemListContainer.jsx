import React, { useState, useEffect } from "react";
import '../App.css'
import ItemList from "./ItemList";
import getProductos from "./Item";
import {useParams} from "react-router-dom";

import db from "../services/firestore";
import {getDocs, collection } from "firebase/firestore"

function ItemListContainer() {
  
  
  const [itemProductos, setData] = useState([])
  const idProducto = useParams().id
  const products = []
  
  
  

  function getProducto() {
    return new Promise((resolve => {
      
      const productosCollection = collection(db, "productos")

      getDocs(productosCollection).then(snapshot =>{
        const docsData = snapshot.docs.map(doc => {
          return {... doc.data(), id:  doc.id}
        })
        resolve(docsData)
        
      })
      
    }))
  } 

  

  useEffect(() => {
    getProducto().then(producto => {
      
      let itemFiltrado = producto.filter((elemento) => elemento.category === idProducto)

      if (idProducto === undefined) {
        setData(producto) 
      }
      else {
        setData(itemFiltrado)
      
      }
    })
  
  }, [idProducto])
  
  return (
    
    <>
    <p className="titulo-productos">{idProducto}</p>

    <ItemList getProductos={getProductos}/>
    </>
  )

}

export default ItemListContainer