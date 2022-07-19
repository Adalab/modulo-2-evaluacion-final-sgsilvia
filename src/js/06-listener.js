'use strict';


//listener each li//
function listenerSerie() {
  const listSerie = document.querySelectorAll('.js-list-serie');
  for (const eachSerie of listSerie) {
    eachSerie.addEventListener('click', handleclickFav);
  }
}


//events//
btnSearch.addEventListener('click', handleclick);

btnFavReset.addEventListener('click', handleClickReset);

btnHeaderReset.addEventListener('click', handleClickHeaderReset);
