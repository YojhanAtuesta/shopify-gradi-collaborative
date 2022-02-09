const options = { style: 'currency', currency: 'USD' };
const numberFormat = new Intl.NumberFormat('en-US', options);

function removeItem(object) {
  let dataFavorites = sessionStorage.getItem("data");
  dataFavorites  = JSON.parse(dataFavorites);
  let productFavorite = object.getAttribute("product");
  let usefulData = JSON.parse(productFavorite);
  console.log(dataFavorites, usefulData)
  dataFavorites = dataFavorites.filter((data) => data.id != usefulData.id);
  console.log(dataFavorites);
  sessionStorage.setItem("data", JSON.stringify(dataFavorites));
  getFavouriteProducts();
}

const getCarProduct = (dataRender) => {
  let favouritPageItems = document.querySelector(".favourite-page__items");
  let favouritePageItem = document.createElement("div");
  favouritePageItem.classList.add("favourite-page__item");
  let divfavouritPageItems = document.createElement("div");
  divfavouritPageItems.setAttribute("class", "favourite-page__items");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let span = document.createElement("span");
  let buttonAddCar = document.createElement("button");
  let buttonDeleteFav = document.createElement("button");

  img.setAttribute("src", `${dataRender.featured_image}`);
  p.setAttribute("class", `favourite-page__item__title`);
  span.setAttribute("class", `favourite-page__price`);
  buttonAddCar.setAttribute("id", `${dataRender.id}`);
  buttonDeleteFav.setAttribute("class", `favourite-page__item__remove`);
  buttonDeleteFav.setAttribute("onclick", "removeItem(this)");
  buttonDeleteFav.setAttribute("product", JSON.stringify(dataRender));
  buttonAddCar.setAttribute("class", `favourite-page__item__buy`);
  let price = dataRender.price;
  price = String(price).slice(0, -2);
  price = numberFormat.format(price);
  p.innerHTML = `${dataRender.title}`;
  span.innerHTML = `${price}`;
  buttonAddCar.innerHTML = `Añadir al carrito`;
  buttonDeleteFav.innerHTML = `Eliminar de favoritos`;

  favouritePageItem.append(img);
  favouritePageItem.append(p);
  favouritePageItem.append(span);
  favouritePageItem.append(buttonAddCar);
  favouritePageItem.append(buttonDeleteFav);
  favouritPageItems.append(favouritePageItem);

}

function getFavouriteProducts() {
  let dataFavorites = sessionStorage.getItem("data");
  let favouritPageItems = document.querySelector(".favourite-page__items");
  favouritPageItems.innerHTML = "";
  dataFavorites = JSON.parse(dataFavorites);
  dataFavorites?.forEach(element => {
    getCarProduct(element);
  })
}

window.addEventListener("load", getFavouriteProducts);
