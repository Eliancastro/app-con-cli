import React, {useState, useEffect} from "react";
import getProductos from "./Item";
import { useParams } from "react-router-dom";
import CartItem from "./CardItem";

function ItemList(props){
    let { idCategory } = useParams();
    const [data, setData] = useState([]);
    
    useEffect(()=> {
        getProductos().then((respuesta) => {
            let filters = respuesta.filter ((element)=> element.category === idCategory);
            if(idCategory === undefined) {
                setData(respuesta);
                
            } else {
                setData(filters);
                

            }
    });
    }, [[idCategory], [data]]);

    return (
        <div className="container"> 
            <div className="row pb-3 pt-3">
                <h3 className="fw-light">{props.greeting}</h3>
                {
                    data.map(item => (
                    <div className="col-md-4 mb-2" key={item.id}>
                        <CartItem id={item.id} initial={1} stock={item.stock} title={item.title} img={item.img} description={item.description}/>
                    </div> 
                    ))
            
                }
            </div>
        </div>
    );
}

export default ItemList;