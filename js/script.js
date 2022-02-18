

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
        document.querySelector(".loader").innerHTML = "";
        list.innerHTML = "";
        getArray.forEach(function(card) {
            list.innerHTML += `<li><a href="details.html?id=${card.id}">
                                    <p>Character: ${card.name}</p></li>`
        });
    }catch(err) {
        console.log("Her er feilen " ,err);
        loader.innerHTML = "";
    }
}
callApi();


// function showList(event) {
//     console.log(event.target.event);
//     const list = event.target.event;
//     for(let i = 0; i < list; i++) {
//         list.innerHtml = `<a class="list" href="details.html?id=${i}">${i}</a>`;
//     }
// }
// showList();