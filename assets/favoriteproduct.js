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
        getCarProduct(dataFavorites)

    }  else{
        let productFavorite = object.getAttribute("product")
        let usefulData = JSON.parse(productFavorite)
        let dataFavorites = sessionStorage.getItem("data")
        let parseuldataFavorites = JSON.parse(dataFavorites)
        parseuldataFavorites.push(usefulData)
        let usefulDataFavorites = JSON.stringify(parseuldataFavorites)
        sessionStorage.setItem("data", usefulDataFavorites);
        getCarProduct(dataFavorites)
    }
}


let favouritePage = document.querySelector(".favourite-page");


const getCarProduct =(dataRender)=>{
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
