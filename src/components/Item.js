const data= [
    {
        id: 1,
        title: "Cerveza",
        img: "../Cerveza.png",
        description: "Cerveza rubia",
        stock: 9,
        category: "Cerveza"
    },
    {
        id: 2,
        title: "Fernet",
        img: "../FERNET.jpg",
        description: "Fernet branca",
        stock: 9,
        category: "Fernet"
    },
    {
        id: 3,
        title: "Gancia",
        img: "../Gancia.jpg",
        description: "Gancia americano",
        stock: 9,
        category: "Gancia"
    },
    {
        id: 4,
        title: "Vino",
        img:"../Vino.png",
        description: "Vino tinto",
        stock: 9,
        category: "Vino"
    },
    {
        id: 5,
        title: "Vodka",
        img: "../Vodka.png",
        description: "Vodka",
        stock: 9,
        category: "Vodka"
    },
];

function getProductos(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(cards), 500);
    });
}

export default getProductos;