const APIurl = "api.coincap.io/v2/assets";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + APIurl;
console.log(APIurl);

const cryptoContainer = document.querySelector(".container");

async function cryptoNames() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const responseJSON = await response.json(); // convert the response to json data
        console.log(responseJSON);
        const cryptoData = responseJSON.results;
        //console.log(cryptoData);
        for (let i = 0; i < cryptoData.length; i++) {
            console.log(cryptoData[i].id);
            cryptoContainer.innerHTML += `<li><span>${cryptoData[i].id}</span></li>`
        }



    }
    catch(error) {
        cryptoContainer.innerHTML += `<li>there is an error happening</li>`
        console.log(error)
    }
}
cryptoNames();