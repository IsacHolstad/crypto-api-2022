(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2885261,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
const APIurl = 'api.coincap.io/v2/assets?key=66579196-1262-493b-bde9-f1a036eea696'
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + APIurl;
//console.log(corsFixUrl);
//var key = "66579196-1262-493b-bde9-f1a036eea696"

const cryptoContainer = document.querySelector(".container");

async function cryptoNames() {
    try{
        const response = await fetch(corsFixUrl);
        //console.log(response.type);
        const responseJSON = await response.json(); // convert the response to json data
        //console.log(responseJSON);
        const cryptoData = responseJSON.data;
        //console.log(cryptoData)
        for (let i = 0; i < cryptoData.length; i++) {
            if(i === 25) {
                break
            }
            //console.log(cryptoData[i]);
            cryptoContainer.innerHTML += `<li><span><a href="detailcrypto.html?id=${cryptoData[i].id}">${cryptoData[i].id}, ${cryptoData[i].supply} USD</a></span></li>`;
        }



    }
    catch(error) {
        cryptoContainer.innerHTML += `<li>there is an error happening</li>`
       
    }
}
cryptoNames();
