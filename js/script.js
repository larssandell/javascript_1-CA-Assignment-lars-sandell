

const urlApi = "https://rickandmortyapi.com/api/character";
const cardContainer = document.querySelector(".card");
const list = document.querySelector(".list");
const section = document.querySelector("section")



// async function callApi() {
//     try {
//         const response = await fetch(urlApi)
//         const data = await response.json();
//         const getArray = data.results;
//         console.log(getArray);
//         for(let i = 0; i < getArray.length; i++) {
//         }
//     }catch(err) {
//         console.log("Her er feilen " ,err);
//     }
// }
// callApi();

// section.addEventListener("click", showList);

function showList(event) {
    console.log(event.target.event);
    const list = event.target.event;
    for(let i = 0; i < list; i++) {
        list.innerHtml = `<a class="list" href="details.html?id=${i}">${i}</a>`;
    }
}
showList();