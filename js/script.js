const urlApi = "https://rickandmortyapi.com/api/character";

async function callApi() {
    try {
        const response = await fetch(urlApi)
        const data = await response.json();
        const getArray = data.results;
        console.log(getArray);
    }catch(err) {
        console.log("Her er feilen " ,err);
    }
}
callApi();