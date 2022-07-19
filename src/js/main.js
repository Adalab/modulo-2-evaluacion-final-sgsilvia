'use strict';

function handleClickReset() {
  localStorage.clear();
  clearFav();
  renderAnimeFav();
}

function clearFav() {
  favourites = [];
}
