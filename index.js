const closeButton = document.querySelector(".close-btn")
const openButton = document.querySelector(".open-btn")
const mobileNavigation = document.querySelector(".mobile-navigation")

openButton.addEventListener('click',() => {
    mobileNavigation.classList.add("active")
})

closeButton.addEventListener('click',() => {
    mobileNavigation.classList.remove("active")
})
