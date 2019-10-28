import { GeoLocation } from "./geolocation/index.js";

const divContent = document.querySelector('div.content');
const divRange = document.querySelector('div#range');
const rangeValue = document.getElementById("slider");
document.addEventListener('deviceready', function () {


    console.clear();

    let geoLocation = new GeoLocation();
    
    geoLocation.getPosition()
        .then((position) => {
            localStorage.setItem("latitude", position.coords.latitude);
            localStorage.setItem("longitude", position.coords.longitude);
            console.log(localStorage.getItem("latitude"));
            console.log(localStorage.getItem("longitude"));


            rangeValue.addEventListener('change', function(){
                console.log(this.value);
                divRange.textContent  = this.value;
            });

            

        })
        .catch((err) => {
            divContent.textContent = "Não foi possível usar sua localização"
            console.error(err.message);
        });


});

function loadUsers(){

}