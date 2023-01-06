const API_KEY = "f7957a321e899c0659934f42e7ca6cbc";

function onGeoSuccess(geolocationPosition) {
    const lat = geolocationPosition.coords.latitude;
    const lon = geolocationPosition.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoFailure() {
    alert("Can't find your location information!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure);
