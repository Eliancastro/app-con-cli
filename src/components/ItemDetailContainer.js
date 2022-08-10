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

export default ItemDetailContainer;