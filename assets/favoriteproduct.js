let button = document.querySelectorAll(".favourite__button")

function saveFavoriteProducts(object) {
    let product = JSON.parse(JSON.stringify(object))
    console.log({product})
}
