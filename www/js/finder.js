import { GeoLocation } from "./geolocation/index.js";

const divContent = document.querySelector('div.content');
document.addEventListener('deviceready', function () {

    console.clear();

    let geoLocation = new GeoLocation();




    geoLocation.getPosition()
        .then((position) => {
            localStorage.setItem("latitude", position.coords.latitude);
            localStorage.setItem("longitude", position.coords.longitude);
            console.log(localStorage.getItem("latitude"));
            console.log(localStorage.getItem("longitude"));

        })
        .catch((err) => {
            divContent.textContent = "Não foi possível usar sua localização"
            console.error(err.message);
        });


});