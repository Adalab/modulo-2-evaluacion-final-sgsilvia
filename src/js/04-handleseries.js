'use strict';

//handle click btn searh header//

function handleclick(ev) {
  ev.preventDefault();
  const inputSearchValue = inputSearch.value;
  getDataApi(inputSearchValue);
}

//hander click FAV//

function handleclickFav(ev) {
  ev.preventDefault;
  const idFavSerie = parseInt(ev.currentTarget.id);

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
}
