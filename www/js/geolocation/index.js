export class GeoLocation {
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 10000
    }
    getPosition = function (options) {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }
}