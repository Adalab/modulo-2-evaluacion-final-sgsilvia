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




//btn reset input search and list//
function handleClickHeaderReset(ev) {
  ev.preventDefault();
  console.log(btnHeaderReset);
  clearInput();
  clearList ();
  renderAnime();
}



function clearInput() {
  const inputClear = '';

  inputSearch.value = inputClear;
  
}
function clearList (){
  animeData = [];
 }