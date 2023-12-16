const API_KEY = '73cdc44538cc10619968a558db2f8535';
const DEFAULT_VALUE = '--';
const searchInput = document.getElementById("search-input");


const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
// HÀM FETCH API request: req
searchInput.addEventListener(
    "change", (req) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.target.value}&appid=${API_KEY}&lang=vi&units=metric`)
        .then(reponse => reponse.json())
        .then((data) => {
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;  
        })
    }
)

