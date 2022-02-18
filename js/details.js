const qs = document.location.search;

const params = new URLSearchParams(qs);

const id = params.get("id");

const urlApi = "https://rickandmortyapi.com/api/character/" + id;
const main = document.querySelector("main")
const char = document.querySelector(".char")


async function getCharacters() {
    try {
        const response = await fetch(urlApi);
        const apiChar = await response.json();
        createHtml(apiChar);

    }catch(err) {
        console.log("What went wrong", err);
        main.innerHtml = err;
    }
}

getCharacters();

function createHtml(apiChar) {
    char.innerHTML = `<div class="char"><h1>Name: ${apiChar.name}</h1>
                      <h2>Gender: ${apiChar.gender}</h2>
                      <h2>Species: ${apiChar.species}</h2>
                      <img class="avatar">${apiChar.image}</img></div>`
}