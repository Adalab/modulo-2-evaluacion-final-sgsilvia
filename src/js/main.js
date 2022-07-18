'use strict';

console.log('>> Ready :)');

const listAnime = document.querySelector('.js-list-anime');

const btnSearch = document.querySelector('.js-btn-search');
const inputSearch = document.querySelector('.js-input-search');
const listAnimeFav = document.querySelector('.js-list-fav');

//arrays//
let animeData = [];
let favourites = [];

//datos servidor//

function getDataApi(inputSearchValue) {
  fetch(`https://api.jikan.moe/v4/anime?q=${inputSearchValue}`)
    .then((response) => response.json())
    .then((serverResp) => {
      animeData = serverResp.data;

      for (const eachSerie of animeData) {
        if (
          eachSerie.images.jpg.image_url ===
          '"https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'
        ) {
          eachSerie.images.jpg.image_url =
            'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        }
      }

      renderAnime();
    });
}
//localstorage//

function onLoad() {
  const dataLocalStorage = JSON.parse(localStorage.getItem('data'));
  if (dataLocalStorage) {
    favourites = dataLocalStorage;
    renderAnimeFav(favourites);
    console.log('hay cosas');
  }

  console.log(dataLocalStorage);
}
onLoad();

//manejadora click//

function handleclickFav(ev) {
  ev.preventDefault;
  const idFavSerie = parseInt(ev.currentTarget.id);
  console.log(idFavSerie);

  const serieFav = animeData.find(
    (eachSerie) => eachSerie.mal_id === idFavSerie
  );

  const favouriteFound = favourites.findIndex(
    (fav) => fav.mal_id === idFavSerie
  );
  if (favouriteFound === -1) {
    favourites.push(serieFav);
  } else {
    favourites.splice(favouriteFound, 1);
  }

  renderAnimeFav();
  renderAnime();
  localStorage.setItem('data', JSON.stringify(favourites));

  console.log(favourites);
}

function listenerSerie() {
  const listSerie = document.querySelectorAll('.js-list-serie');
  for (const eachSerie of listSerie) {
    eachSerie.addEventListener('click', handleclickFav);
  }
}

//function write//
function renderAnime() {
  let html = '';
  let classFav = '';

  for (const eachSerie of animeData) {
    const favAnimeData = favourites.findIndex(
      (eachFav) => eachSerie.mal_id === eachFav.mal_id
    );
    console.log(favAnimeData);
    if (favAnimeData !== -1) {
      classFav = 'serie-fav';
    } else {
      classFav = '';
    }

    html += ` <li class="li-serie js-list-serie" ${classFav} id= ${eachSerie.mal_id}>
      `;
    html += `<h3 class="li-serie__title">${eachSerie.title} </h3>`;
    html += `<img class="li-serie__image" src="${eachSerie.images.jpg.image_url} "
        alt="imagen">`;
    html += `  </li>`;
  }
  listAnime.innerHTML = html;

  listenerSerie();
  console.log(renderAnime);
}

function renderAnimeFav() {
  let html = '';

  for (const eachSerie of favourites) {
    html += `<li class="li-serie js-list-serie" id= ${eachSerie.mal_id}>`;
    html += ` <h3 class="li-serie__title">${eachSerie.title} </h3>`;
    html += `<img class="li-serie__image" src="${eachSerie.images.jpg.image_url} "
        alt="imagen">`;
    html+= `<i class="fa-solid fa-circle-xmark li-serie__icon "></i>`;
    html += ` </li>`;
  }
  listAnimeFav.innerHTML = html;

  listenerSerie();
 
}

//selectet fav style//

//manejadoras eventos//
function handleclick(ev) {
  ev.preventDefault();
  const inputSearchValue = inputSearch.value;

  getDataApi(inputSearchValue);
}

//eventos//
btnSearch.addEventListener('click', handleclick);
