'use strict';
//btn reset fav//
function handleClickReset() {
  localStorage.clear();
  clearFav();
  renderAnimeFav();
}

function clearFav() {
  favourites = [];
}




//btn reset input search//
function handleClickHeaderReset(ev) {
  ev.preventDefault();
  console.log(btnHeaderReset);
  clearInput();
}
function clearInput() {
  const inputClear = '';
  inputSearch.value = inputClear;
}
