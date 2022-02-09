let favouritePage = document.querySelector(".favourite-page");

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

const getCarProduct = (dataRender) => {
    let favouritPageItems = document.querySelector(".favourite-page__items");

    let divfavouritPageItems = document.createElement("div");
    divfavouritPageItems.setAttribute("class", "favourite-page__items");

    for (let i = 0; i < dataRender.length; i++) {
        let img = document.createElement("img");
        let p = document.createElement("p");
        let span = document.createElement("span");
        let buttonAddCar = document.createElement("button");
        let buttonDeleteFav = document.createElement("button");

        img.setAttribute("src", `${dataRender[i].featured_image}`);
        p.setAttribute("class", `favourite-page__item__title`);
        span.setAttribute("class", `favourite-page__price`);
        buttonAddCar.setAttribute("id", `${dataRender[i].id}`);
        buttonDeleteFav.setAttribute("class", `favourite-page__item__remove`);

        p.innerHTML = `${promiseGetCar[i].description}`;
        span.innerHTML=`${promiseGetCar[i].price} $`;
        buttonAddCar.innerHTML=`Anadir al carrito`;
        buttonDeleteFav.innerHTML=`Eliminar de favoritos`;

        favouritPageItems.appendChild(img);
        favouritPageItems.appendChild(p);
        favouritPageItems.appendChild(span);
        favouritPageItems.appendChild(buttonAddCar);
        favouritPageItems.appendChild(buttonDeleteFav);
    }
    favouritePage.replaceChild(divfavouritPageItems, favouritPageItems);
}

window.addEventListener("load", verifyItemInStorage);
