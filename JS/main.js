import { getProducts } from "./api.js";
import { createCard, cardCarrito } from "./card.js";

const obtnerProductos = async () => {
    let productos = await getProducts()
    let divProduct = document.querySelector("#card-products")

    productos.forEach(element => {
        let {image, category, description, price, title, id} = element
        divProduct.appendChild(createCard(image, title, category,description,price,id,handler))        
    });
}

let precios = []

const handler = (obj) => {
    let { cardTitle, pPrice} = obj

    let car = document.querySelector("#carrito-id")
    precios.push(pPrice)
    car.append(cardCarrito(cardTitle, pPrice))
    document.getElementById("total").innerText = `Total = ${getTotal(precios)}`
}

const getTotal = (array) => {
    return array.reduce((acum,current)=>acum+current,0)
}


obtnerProductos()