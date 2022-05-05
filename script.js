
const APIurl = "api.coincap.io/v2/assets/"
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + APIurl;
//var key = "66579196-1262-493b-bde9-f1a036eea696"

const cryptoContainer = document.querySelector(".container");

async function cryptoNames() {
    try{
        const response = await fetch(corsFixUrl);
        const responseJSON = await response.json(); // convert the response to json data
        const cryptoData = responseJSON.data;
        console.log(cryptoData)
        for (let i = 0; i < cryptoData.length; i++) {
            if(i === 20) {
                break
            }
            cryptoContainer.innerHTML += `<li><a href="detailcrypto.html?id=${cryptoData[i].id}">${cryptoData[i].id}</a></li>`;
        }
    }
    catch(error) {
        cryptoContainer.innerHTML += `<li>there is an error happening</li>`
       
    }
}
cryptoNames();