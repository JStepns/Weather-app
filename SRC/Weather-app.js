function getCurrentTime(){
let currentDateAndTime = new Date ();
let currentTime = document.querySelector("#current-time");
let currentDate = document.querySelector("#current-date");
let hour = ("0" + currentDateAndTime.getHours()).slice(-2);
let minutes = ("0" + currentDateAndTime.getMinutes()).slice(-2);
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[currentDateAndTime.getDay()];
let date = currentDateAndTime.getDate();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[currentDateAndTime.getMonth()];
let year = currentDateAndTime.getFullYear();
currentTime.innerHTML = `${hour}:${minutes}`;
currentDate.innerHTML = `${day} ${date} ${month} ${year}`;  
setInterval(getCurrentTime, 60000);
}
getCurrentTime();

function displayTime(timestamp){
  let date = new Date(timestamp);
  let hours = ("0" + date.getHours()).slice(-2);
  let minutes = ("0" + date.getMinutes()).slice(-2);
  return `${hours}:${minutes}`;
}

function displayWeather(response) {
  document.querySelector("#dropdownMenu2").innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let tempMin = Math.round(response.data.main.temp_min);
  let tempMax = Math.round(response.data.main.temp_max);
  let pressure = response.data.main.pressure;
  let humidity = response.data.main.humidity;
  let wind = response.data.wind.speed;
  celsiusTemp = response.data.main.temp;
  let displayTemp = document.querySelector("#current-temp-value");
  let displayMin = document.querySelector("#min-temp");
  let displayMax = document.querySelector("#max-temp");
  let displayPressure = document.querySelector("#pressure em");
  let displayHumidity = document.querySelector("#humidity em");
  let displayWind = document.querySelector("#wind em");
  let lastUpdatedTime = document.querySelector("#last-updated-time h5");
  let weatherIcon = document.querySelector("#current-temp-icon img");
  displayTemp.innerHTML = temp;
  displayMin.innerHTML = `Min: ${tempMin}°`;
  displayMax.innerHTML = `Max: ${tempMax}°`;
  displayPressure.innerHTML = `Pressure: ${pressure} hPa`;
  displayHumidity.innerHTML = `Humidity: ${humidity}%`;
  displayWind.innerHTML = `Wind speed: ${wind} m/s`;
  lastUpdatedTime.innerHTML = `Last updated: ${(displayTime(response.data.dt*1000))}`;
  weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  weatherIcon.setAttribute("alt", response.data.weather[0].description);
}

function displayPosition(position){
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "56d850ac737202634200204105b3c8de";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(displayWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function getCurrentPosition(){
  navigator.geolocation.getCurrentPosition(displayPosition);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentPosition);

function displayForecast(response){
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML=null;
  let forecast = null;

  for (let index=0;index<6;index++){
    forecast = response.data.list[index];
    forecastElement.innerHTML +=`
            <div class="col-2"> 
                <h5>
                ${displayTime(forecast.dt*1000)}
                </h5>
                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png">
                <div class="forecast-temp">
                    <strong>
                    ${Math.round(forecast.main.temp_max)}°
                    </strong>
                    ${Math.round(forecast.main.temp_min)}°
                </div>
            </div>
            `;
  }
}

function searchCity(event) {
  event.preventDefault();
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let city = document.querySelector("#search-box").value;
  let apiKey = "56d850ac737202634200204105b3c8de";
  let apiUrl = `${apiEndpoint}?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(displayWeather); 

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

let celsiusTemp = null;

function displayFahrenheitTemp(event){
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp-value");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemp = celsiusTemp*9/5+32;
  currentTemp.innerHTML = Math.round(fahrenheitTemp);
}

function displayCelsiusTemp(event){
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp-value");
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  currentTemp.innerHTML = Math.round(celsiusTemp);
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusTemp);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);