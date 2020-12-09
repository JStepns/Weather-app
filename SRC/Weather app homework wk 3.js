let weather = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city");
//let tempFinParis = Math.round(weather.paris.temp * 1.8 + 32);
//let tempFinTokyo = Math.round(weather.tokyo.temp * 1.8 + 32);
//let tempFinLisbon = Math.round(weather.lisbon.temp * 1.8 + 32);
//let tempFinSanFran = Math.round(weather["san francisco"]["temp"] * 1.8 + 32);
//let tempFinMoscow = Math.round(weather.moscow.temp * 1.8 + 32);
//don't need to use replace function if you put all city names in lowercase and use JS toLowerCase function
//city = city.replace("p", "P");
//city = city.replace("t", "T");
//city = city.replace("l", "L");
//city = city.replace("san f", "San F");
//city = city.replace("m", "M");
//city = city.trim();
city = city.toLowerCase();
if (weather[city] !== undefined){
  
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let tempC = Math.round(temperature);
  let tempF = Math.round(tempC * 1.8 + 32);

    alert (`It is currently ${tempC}℃ (${tempF}°F) in ${city} with a humidity of ${humidity}%`);
} else {
    alert (`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+ ${city}`);
}
//can't use weather["city"] because the key/property is not named city

//if (city === "paris"){
    //alert(`It is currently ${weather.paris.temp}℃ (${tempFinParis}°F) in ${city} with a humidity of ${weather.paris.humidity}%`);
//}
//else if (city === "tokyo"){
    //alert(`It is currently ${weather.tokyo.temp}℃ (${tempFinTokyo}°F) in ${city} with a humidity of ${weather.tokyo.humidity}%`);
//}
//else if (city === "lisbon"){
    //alert(`It is currently ${weather.lisbon.temp}℃ (${tempFinLisbon}°F) in ${city} with a humidity of ${weather.lisbon.humidity}%`);
//}
//else if (city === "san francisco"){
    //alert(`It is currently ${weather["san francisco"]["temp"]}℃ (${tempFinSanFran}°F) in ${city} with a humidity of ${weather["san francisco"]["humidity"]}%`);
//}
//else if (city === "moscow"){
    //alert(`It is currently ${weather.moscow.temp}℃ (${tempFinMoscow}°F) in ${city} with a humidity of ${weather.moscow.humidity}%`);
//} else {
    //alert (`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+ ${city}`);
//}
function add(x, y) {
  return x + y;
}

let result = add(3, 4);
let result2 = add(result, 0);


