

const urlApi = "https://rickandmortyapi.com/api/character";
const cardContainer = document.querySelector(".card");
const list = document.querySelector(".list");
const section = document.querySelector("section")
const loader = document.querySelector(".loader");


async function callApi() {
    try {
        const response = await fetch(urlApi)
        const data = await response.json();
        const getArray = data.results;
        console.log(getArray);
        loader.innerHTML = "";
        list.innerHTML = "";
        getArray.forEach(function(card) {
            list.innerHTML += `<div><li><a href="details.html?id=${card.id}">${card.name}</li></div>`
        });
    }catch(err) {
        console.log("Her er feilen " ,err);
        loader.innerHTML = "none";
        document.querySelector("main").innerHTML = `<div class="error">
                                                        <img src="/images/error404.png"></a>
                                                        <h2>${err}</h2>
                                                    <div>`;
    }
}
callApi();
