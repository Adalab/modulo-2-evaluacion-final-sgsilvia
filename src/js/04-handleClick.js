'use strict';

//manejadora click//

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

function listenerSerie() {
  const listSerie = document.querySelectorAll('.js-list-serie');
  for (const eachSerie of listSerie) {
    eachSerie.addEventListener('click', handleclickFav);
  }
}

//eventos//
btnSearch.addEventListener('click', handleclick);
btnFavReset.addEventListener('click', handleClickReset);
