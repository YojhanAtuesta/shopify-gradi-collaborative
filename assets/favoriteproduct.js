let button = document.querySelectorAll(".favourite__button")

function saveFavoriteProducts(object) {
    let sendFavoriteProduct = []
    let productFavorite = object.getAttribute("product") 
    const dataFavorite =  JSON.parse(productFavorite)
    sendFavoriteProduct.push(dataFavorite)
    localStorage.setItem('dataFavoriteProducts', JSON.stringify(sendFavoriteProduct));
    
}
