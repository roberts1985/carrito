/* 
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

let createCard = (imgSrc,cardTitle,pCategory, pDescription, pPrice, id, handler) => {
    let div = document.createElement("div")
    div.classList.add("col","mb-3")

    let principalDiv = document.createElement("div")
    principalDiv.classList.add("card","h-100")
    //principalDiv.setAttribute("style","width: 18rem;")

    let image = document.createElement("img")
    image.classList.add("card-img-top")
    image.setAttribute("src",imgSrc)
    //image.setAttribute("style","heigth: 18rem;")

    let secondaryDiv = document.createElement("div")
    secondaryDiv.classList.add("card-body")

    let title = document.createElement("h5")
    let textTitle = document.createTextNode(cardTitle)
    title.classList.add("card-title")
    title.appendChild(textTitle)

    let content = document.createElement("p")
    content.classList.add("card-text")
    let textContent = document.createTextNode(`Category: ${pCategory}`)
    content.appendChild(textContent)

    let description = document.createElement("p")
    description.classList.add("card-text")
    let textDescription = document.createTextNode(`Description: ${pDescription}`)
    description.appendChild(textDescription)

    let price = document.createElement("p")
    price.classList.add("card-text")
    let textPrice = document.createTextNode(`Price: ${pPrice}`)
    price.appendChild(textPrice)

    let anchor = document.createElement("button")
    anchor.classList.add("btn","btn-primary","btn-lg")
    let anchorText = document.createTextNode("Añadir")
    anchor.setAttribute("type","button")
    anchor.appendChild(anchorText)
    anchor.addEventListener("click", ()=>{
        handler({imgSrc, cardTitle, pCategory, pDescription, pPrice, id})
    })

    secondaryDiv.append(title,content,description, price, anchor)
    principalDiv.append(image,secondaryDiv)
    div.appendChild(principalDiv)
    return div
}

let cardCarrito = (cardTitle, pPrice) => {
    let divPrincipal = document.createElement("div")
    divPrincipal.classList.add("border","bg-white")

    let title = document.createElement("h5")
    let textTitle = document.createTextNode(cardTitle)
    title.classList.add("card-title")
    title.appendChild(textTitle)

    let price = document.createElement("p")
    price.classList.add("card-text")
    let textPrice = document.createTextNode(`Price: ${pPrice}`)
    price.appendChild(textPrice)

    divPrincipal.append(title,price)

    return divPrincipal
}

export { createCard, cardCarrito }