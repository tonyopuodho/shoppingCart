const closeButton = document.querySelector(".close-btn")
const openButton = document.querySelector(".open-btn")
const mobileNavigation = document.querySelector(".mobile-navigation")
const productContainer = document.querySelector(".product-container")
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
            <div class="products" id=${id} >
                    <img src=${images} alt="products" class="product-img">
                    <div class="product-details">
                        <h3>${title}</h3>
                        <div class="cash">
                            <h2>Ksh ${price}</h2>
                            <button class="add-btn">Add</button>
                        </div>
                    </div>
            </div>
        `
    })
  
}

displayProducts()
