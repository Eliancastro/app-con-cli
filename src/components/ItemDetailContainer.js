import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data";

function ItemDetailContainer(){
    const [item, setItem] = useState();

    const id = useParams().id;

function traerProducto(){
    return new Promise(
        (resolve, reject) => {
            resolve(dataJSON[id])
        }
    );
}


    useEffect(() => {
        traerProducto()
            .then((respuesta) => setItem(respuesta))
            .catch((err) => alert(error));
    },[]);

    return (
        <div className="main">
            <div className="card">
                <div className="card-img">
                    <img src={item.img} alt="img"/>
                </div>
                <div className="card-detail">
                    <h2>{item.title}</h2>
                    <p>{item.category}</p>
                    <h3>${item.price}</h3>
                </div>
            </div>

        </div>
    )
}

/*import React from "react";
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

export default ItemDetailContainer;*/

export default ItemDetailContainer;