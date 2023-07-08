function formatDate(timestamp){
//calculate the date
let date = new Date(timestamp);
let hours = date.getHours();
let minutes = date.getMinutes();
let day = date.getDay();
return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response){
    console.log(response.data);
    
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;

    let windElement =document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);

    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt*1000);
}
let apiKey = "5f2a54906ddaac5f7865c52af1ed9094";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);

