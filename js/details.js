const qs = document.location.search;

const params = new URLSearchParams(qs);

const id = params.get("id");

const urlApi = "https://rickandmortyapi.com/api/character/" + id;

const char = document.querySelector(".char")

console.log(urlApi);


async function getCharacters() {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        const results = data.results;
        console.log(results);
        createHtml(results);

    }catch(err) {
        console.log(err);
        main.innerHtml = err;
    }
}

getCharacters();

function createHtml(results) {
    char.innerHTML = `<h1>Name: ${results.name}</h1>
                      <h2>Gender: ${results.gender}</h2>
                      <h2>Species: ${results.species}</h2>
                      <img class="avatar">${results.image}</img>`
}