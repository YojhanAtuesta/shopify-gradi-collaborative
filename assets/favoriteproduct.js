let button = document.querySelectorAll(".favourite__button")
let flag = false 

function saveFavoriteProducts(object) {
    let dataFavorites = []

    if(!flag){
        let productFavorite = object.getAttribute("product")
        let usefulData = JSON.parse(productFavorite)
        dataFavorites.push(usefulData)
        let usefulDataFavorites = JSON.stringify(dataFavorites)
        sessionStorage.setItem("data", usefulDataFavorites);
        flag = true

    }  else{
        let productFavorite = object.getAttribute("product")
        let usefulData = JSON.parse(productFavorite)
        let dataFavorites = sessionStorage.getItem("data")
        let parseuldataFavorites = JSON.parse(dataFavorites)
        parseuldataFavorites.push(usefulData)
        let usefulDataFavorites = JSON.stringify(parseuldataFavorites)
        sessionStorage.setItem("data", usefulDataFavorites);
    }


    

}
