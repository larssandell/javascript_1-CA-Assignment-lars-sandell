const qs = document.location.search;

const params = new URLSearchParams(qs);

const id = params.get("id");

const urlApi = "https://rickandmortyapi.com/api/character/" + id;
const main = document.querySelector("main")
const charContainer = document.querySelector(".char-container")

async function getCharacters() {
    try {
        const response = await fetch(urlApi);
        const apiChar = await response.json();
        document.querySelector(".loader").innerHTML = "";
        createHtml(apiChar);

    }catch(err) {
        console.log("What went wrong", err);
        main.innerHtml = `<div class="error"><img src="/images/error404.png></img></div>`;
    }
}

getCharacters();

function createHtml(apiChar) {
    console.log(apiChar);
    charContainer.innerHTML = `<div class="char"><h1>${apiChar.name}</h1>
                      <img src="${apiChar.image}"></img></div>
                      <div class="char"><h2>Gender: ${apiChar.gender}</h2>
                      <h2>Species: ${apiChar.species}</h2>
                      <h2>Location: ${apiChar.location.name}</h2>
                      <h2>Status: ${apiChar.status}</h2></div>
                      <div><ul>Episodes: <a>${apiChar.episode}</a></ul></div>`
}