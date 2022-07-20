'use strict';



//function write all serie (array animeData) //
function renderAnime() {
  let html = '';
  let classTitle = '';
  let classLi = '';

  for (const eachSerie of animeData) {
    const favAnimeData = favourites.findIndex(
      (eachFav) => eachSerie.mal_id === eachFav.mal_id
    );
    console.log(favAnimeData);
    if (favAnimeData !== -1) {
      classTitle = 'class-title';
      classLi = 'class-li';
    } else {
      classTitle = '';
      classLi = '';
    }

    html += ` <li class="li-serie js-list-serie  ${classLi} "  id= ${eachSerie.mal_id}>
        `;
    html += `<h3 class="li-serie__title ${classTitle}">${eachSerie.title} </h3>`;
    html +=`<p> ${ eachSerie.broadcast.time} </p> `;
    html += `<img class="li-serie__image" src="${eachSerie.images.jpg.image_url} "
          alt="imagen">`;
    html += `  </li>`;
  }
  listAnime.innerHTML = html;
  listenerSerie();
}



//function write only Favourite (array favourites)

function renderAnimeFav() {
  let html = '';

  for (const eachSerie of favourites) {
    html += `<li class="li-serie js-list-serie" id= ${eachSerie.mal_id}>`;
    html += ` <h3 class="li-serie__title">${eachSerie.title} </h3>`;
    html += `<img class="li-serie__image" src="${eachSerie.images.jpg.image_url} "
          alt="imagen">`;
  
    html += `<i class="fa-solid fa-circle-xmark li-serie__icon "></i>`;
    html += ` </li>`;
  }
  listAnimeFav.innerHTML = html;
  listenerSerie();
}


