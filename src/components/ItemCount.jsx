import React, {useState}  from "react";

function ItemCount(props){
    let [count, setCount] = useState(1);

    const Increment = () => 
    count >= props.initial && count < props.stock
    ? setCount(count + 1) : setCount(count + 0);

    const Decrement = () =>
    count > props.initial ? setCount(count - 1) : setCount(count - 0);

    return(
        <div>
            <button onclick={Increment}>Mas</button>
            <hr />
            <button onclick={Decrement}>Menos</button>
        </div>
    )
}

export default ItemCount;