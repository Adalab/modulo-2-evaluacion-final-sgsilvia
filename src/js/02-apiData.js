'use strict';
//arrays//
let animeData = [];
let favourites = [];

//datos servidor//

function getDataApi(inputSearchValue) {
  fetch(`https://api.jikan.moe/v4/anime?q=${inputSearchValue}`)
    .then((response) => response.json())
    .then((serverResp) => {
      animeData = serverResp.data;

      bucleAnimedata();
      renderAnime();
    });
}
function bucleAnimedata() {
  for (const eachSerie of animeData) {
    if (
      eachSerie.images.jpg.image_url ===
      'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'
    ) {
      eachSerie.images.jpg.image_url =
        'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    }
  }
}
//localstorage//

function onLoad() {
  const dataLocalStorage = JSON.parse(localStorage.getItem('data'));
  if (dataLocalStorage) {
    favourites = dataLocalStorage;
    renderAnimeFav(favourites);
    console.log('hay cosas');
  }
}
onLoad();
