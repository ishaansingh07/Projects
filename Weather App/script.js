// File: Weather Application
// Author: Ishaan Singh
// Date: 16/11/2023

// Description:
// ------------
// The functionality of the code is to fetch the information i.e.(about the weather of required place) 
// through API fromhttps://openweathermap.org/current

// Contact Information:
// --------------------
// ishaan.singh2k@gmail.com


//API key from https://home.openweathermap.org/api_keys
const apiKey = "aa2be26e1e11fbf377b201b1300eed13";

//Url from https://openweathermap.org/current
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =  document.querySelector(".weather-icon")

async function checkWeather(city) {
  const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);
if(response.status == 404){
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
} else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name; //Refer from console log data
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; //To round-off the value
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  
    if(data.weather[0].main == "Clouds"){
      weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src="images/mist.png"
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display = "none"
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
