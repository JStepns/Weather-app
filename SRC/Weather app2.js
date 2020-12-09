let currentDateAndTime = new Date ();
let currentTime = document.querySelector("#current-time");
let currentDate = document.querySelector("#current-date");
let hour = currentDateAndTime.getHours();
let minutes = ("0" + currentDateAndTime.getMinutes()).slice(-2);
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[currentDateAndTime.getDay()];
let date = currentDateAndTime.getDate();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[currentDateAndTime.getMonth()];
let year = currentDateAndTime.getFullYear();
currentTime.innerHTML = `${hour}:${minutes}`;
currentDate.innerHTML = `${day} ${date} ${month} ${year}`;  

function showTemp(response){
  let temp = Math.round(response.data.main.temp);
  let tempDisplay = document.querySelector("#current-temp-value");
  tempDisplay.innerHTML = `${temp}`;
}

function searchCity (event) {
  event.preventDefault();

  let searchCityInput = document.querySelector("#search-box");
  let city = searchCityInput.value;
  let cityDisplay = document.querySelector("#dropdownMenu2");
  let units = "metric";
  let apiKey = "56d850ac737202634200204105b3c8de";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`;
  
  if (city) {
    cityDisplay.innerHTML = `${city}` && axios.get(`${apiUrl}`).then(showTemp);
  } else {
    cityDisplay.innerHTML = `Your city here`;
  }
   //return searchCityInput.value;
  }

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

//let city = searchCity();
//let cityInput = searchCityInput.value;
//let units = "metric";
//let apiKey = "56d850ac737202634200204105b3c8de";
//let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
//let apiUrl = `${apiEndpoint}?q=${searchCityInput.value}&units=${units}&appid=${apiKey}`;



//function getTemp(){
  //axios.get(`${apiUrl}`).then(showTemp);
//}

//form.addEventListener("submit", getTemp);


//let currentTemp = document.querySelector("#current-temp-value"); 

//function displayDegreesF () {
  //currentTemp.innerHTML = "95";
//}
//let degreesF = document.querySelector("#fahrenheit");
//degreesF.addEventListener ("click", displayDegreesF);

//function displayDegreesC () {
  //currentTemp.innerHTML = "35";
//}
//let degreesC = document.querySelector("#celsius");
//degreesC.addEventListener ("click", displayDegreesC);


