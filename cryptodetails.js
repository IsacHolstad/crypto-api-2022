const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id')

const ApiUrl = `api.coincap.io/v2/assets/${id}`;


const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + ApiUrl;


const cryptoContainer = document.querySelector(".container");

async function cryptoNames() {
    try{
        const response = await fetch(corsFixUrl);
        const cryptoData = await response.json(); 
        console.log(cryptoData)
         cryptoContainer.innerHTML = `<li>${cryptoData.data.id} ${cryptoData.data.priceUsd}</li>
         <p>volumeUsd24Hr: ${cryptoData.data.volumeUsd24Hr}</p>
         <p>price USD: ${cryptoData.data.priceUsd}</p>
         <p>symbol: ${cryptoData.data.symbol}</p>
         <p>crypto rank: ${cryptoData.data.rank}</p>
         <p class="marketcap">marketCapUsd: ${cryptoData.marketCapUsd}</p>
         <p>marketCapUsd: ${cryptoData.data.marketCapUsd}</p>
         <p class="changelast-day">change last 24hrs: ${cryptoData.data.changePercent24Hr}</p>
         
         
         `;
        
    }
    catch(error) {
        cryptoContainer.innerHTML = `<li class="error-message">there is an error happening</li>`
       
    }
}
cryptoNames();