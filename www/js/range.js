import { GeoLocation } from "./geolocation/index.js";


const rangeValue = document.getElementById("slider");
const submitbtn = document.getElementById("formteste");
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


submitbtn.addEventListener("submit",function (){
    event.preventDefault();
    localStorage.setItem('range',rangeValue.value);
    window.location = "finder.html"
})
