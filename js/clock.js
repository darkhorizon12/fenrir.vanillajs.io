const clockTitle = document.querySelector(".js-clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clockTitle.innerText = `${hours}h ${minutes}m ${seconds}s`;
}

setInterval(getClock, 1000);