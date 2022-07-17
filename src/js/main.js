'use strict';

console.log('>> Ready :)');

const  listAnime = document.querySelector ('.js-list-anime');

const btnSearch = document.querySelector ('.js-btn-search');
const inputSearch =document.querySelector('.js-input-search');

let animeData = [];


//datos servidor//

function getDataApi (inputSearchValue){ fetch (`https://api.jikan.moe/v4/anime?q=${inputSearchValue}`)

.then(response => response.json())
 .then( serverResp => {animeData= serverResp.data;

    renderAnime();
  } );}




//function write//

function renderAnime() {   let html= '';


  for (const eachserie of animeData) {
    html += `<li>
    <div>`;
    html +=` <h2 class="titleH2">${eachserie.title} </h2>`;
    html += `<img class="animeImage" src="${eachserie.images.jpg.large_image_url} "
        alt="imagen">`;
    html +=  ` </div> </li>`;


  }
  listAnime.innerHTML = html;
  console.log(animeData);

}


//manejadoras eventos//
function handleclick (ev){ev.preventDefault();
  const inputSearchValue =  inputSearch.value;

  getDataApi (inputSearchValue);
  console.log(getDataApi );

}


//eventos//
btnSearch.addEventListener ('click', handleclick);

