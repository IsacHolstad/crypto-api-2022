const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id')

const Apiurl = `api.coincap.io/v2/assets/${id}`;


const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + Apiurl;


const cryptoContainer = document.querySelector(".container");

async function cryptoNames() {
    try{
        const response = await fetch(corsFixUrl);
        const cryptoData = await response.json(); 
        console.log(cryptoData)
         cryptoContainer.innerHTML = `<li>${cryptoData.data.id}</li>`;
        
    }
    catch(error) {
        cryptoContainer.innerHTML = `<li>there is an error happening</li>`
       
    }
}
cryptoNames();