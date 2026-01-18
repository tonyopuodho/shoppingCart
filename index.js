const closeButton = document.querySelector(".close-btn")
const openButton = document.querySelector(".open-btn")
const mobileNavigation = document.querySelector(".mobile-navigation")
const productContainer = document.querySelector(".product-container")
const alertElement = document.querySelector(".alert")
const backetInfoElement = document.querySelector(".basketInfo")
const basketItems = document.getElementById("info")

openButton.addEventListener('click',() => {
    mobileNavigation.classList.add("active")
})

closeButton.addEventListener('click',() => {
    mobileNavigation.classList.remove("active")
})

/*
 making an api call that displays products on the frontend side 
*/


let displayProducts = () => {
    fetch('https://dummyjson.com/products',{method: "GET"})
    .then((response) => response.json())
    .then((data) => {
        const products = data.products
        productDetails(products)
    })
    .catch(error => console.log(error))
}

function productDetails(products) {
    products.forEach((items) => {
    const {id,title,price,images} = items
    productContainer.innerHTML += `
            <div class="products">
                    <img src=${images} alt="products" class="product-img">
                    <div class="product-details">
                        <h3>${title}</h3>
                        <div class="cash">
                            <h2>Ksh ${price}</h2>
                            <button class="add-btn" onclick="addItem(${id})">Add</button>
                        </div>
                    </div>
            </div>
        `
    })
    
}
/**
 * 
 * adding items to cart 
 */

let cart = JSON.parse(localStorage.getItem("cart")) || []

function addItem(id){
    
    alertElement.classList.add("active")
    setTimeout(() => {
        alertElement.classList.remove("active")
    },1000)
    cart.push({
        id: id
    })
   
    localStorage.setItem("cart",JSON.stringify(cart))
    displayItemsInCart()
}

function displayItemsInCart() {
    if (cart.length === 0) {
        basketItems.innerHTML = ""
    } else {
        basketItems.innerHTML = cart.length
    }  
}

displayItemsInCart()
displayProducts()
