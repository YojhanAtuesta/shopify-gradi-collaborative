
function removeItem(object) {
    let dataFavorites = sessionStorage.getItem("data");
    dataFavorites  = JSON.parse(dataFavorites);
    let productFavorite = object.getAttribute("product");
    let usefulData = JSON.parse(productFavorite);
    console.log(dataFavorites, usefulData)
    dataFavorites = dataFavorites.filter((data) => data.id != usefulData.id);
    console.log(dataFavorites);
    sessionStorage.setItem("data", JSON.stringify(dataFavorites));
    verifyItemInStorage();
}

function saveFavoriteProducts(object) {
    let dataFavorites = [];
    let productFavorite = object.getAttribute("product");
    let usefulData = JSON.parse(productFavorite);
    dataFavorites = sessionStorage.getItem("data") || [];
    let parseuldataFavorites = JSON.parse(dataFavorites);
    parseuldataFavorites.push(usefulData);
    let usefulDataFavorites = JSON.stringify(parseuldataFavorites);
    sessionStorage.setItem("data", usefulDataFavorites);
    verifyItemInStorage();
}

function verifyItemInStorage(){
    let dataFavorites = sessionStorage.getItem("data");
    dataFavorites  = JSON.parse(dataFavorites);
    let favoritesIds = dataFavorites.map(function(item){
        return item.id;
    });
    let buttons = document.getElementsByClassName("favourite__button");
    buttons = Array.from(buttons);
    let product;

    buttons.forEach((button) => {
      product = button.getAttribute("product");
      let usefulData = JSON.parse(product);
      if(favoritesIds.includes(usefulData.id)){
        button.setAttribute("onclick", "removeItem(this)")
        button.innerHTML = "Eliminar de favoritos"
      }else{
        button.setAttribute("onclick", "saveFavoriteProducts(this)")
        button.innerHTML = "Agregar a favoritos";
      }
    });
}

window.addEventListener("load", verifyItemInStorage);
