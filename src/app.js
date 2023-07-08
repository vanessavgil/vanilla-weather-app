function displayTemperature(response){
    console.log(response.data);
    console.log(response.data.main.temp);
}
let apiKey = "5f2a54906ddaac5f7865c52af1ed9094";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);

