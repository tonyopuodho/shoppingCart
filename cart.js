const cartElement = document.querySelector(".cart-contain")

let products = []
let basket = JSON.parse(localStorage.getItem("cart"))

async function fetchItemsOnServer(){
    const response = await fetch('https://dummyjson.com/products',{method:"GET"})
    const results = await response.json()
    products = results.products
    displayItemsOnCart(products)
}

function displayItemsOnCart(product){
    if (basket !== 0) {
        return (
            cartElement.innerHTML = basket.map((x) => {
                let { id } = x
                let searchItems = product.find((y) => y.id === id)
                return `
                <div class="cart-info">
                    <img src=${searchItems.images} alt="">
                    <div class="bin">
                        <i class="fa-solid fa-trash" title="Remove" onclick="removeItem(${id})"></i>
                    </div>
                    
                    <div class="product-info">
                        <h4>${searchItems.title}</h4>
                        <h2>Ksh ${searchItems.price}</h2>
                    </div>
                    <div class="button-info">
                        <span><button id="decrement">-</button> <span id="counter">0</span> <button id="increment">+</button>   </span>
                    </div>                
                </div>
                `
            }).join("")
        )
    } else {
        return cartElement.innerHTML = `<h1>Cart is empty</h1>`
    }
}

function removeItem(id){
   let selectedItem = id
   basket = basket.filter((x) => x.id !== selectedItem)
   localStorage.setItem("cart",JSON.stringify(basket))
   fetchItemsOnServer()
}

fetchItemsOnServer()
