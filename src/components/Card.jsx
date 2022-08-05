import '../card.css'; 
import ItemCount from './ItemCount';

const Card = ( {name, price, imgurl, description}) => {
    

    return (
        <div className= "main">
          <div className="card">
            <div className="img-card">
             <img src={imgurl} alt="imagen" />
            </div>
            <div className="card-detail">
             <h2>{name}</h2>
              <p>{description}</p>
               <h3>$ {price}</h3>
            <ItemCount initial ="1" stock ="20"/>
             <button text= "agregar"/>
            </div>
          </div>
        </div>
    

    );

}

export default Card;