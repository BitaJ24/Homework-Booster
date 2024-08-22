const apiKey = "3fef980b8eb4a00f93b24794dc8920c7";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=cityName&units=imperial&appid=${apiKey}`;

/**
   * Create a  forecast weather program to which take a city name an return the weather situation of the city.
   * 1)We have given you an api, you can get the necessary data from it to show them on screen.

   *
   * 2)create a function named fetchWeather to get the data from api.
   * 2-1)you should make and return a promise and fetch the data inside it in this function
   * 2-2)it should be call with a passed parameter as city name (you need to replace passed city name inside the given URL)
   *
   * 3)create a function as setWeatherInfo to display the weather information on screen
   * (hint: you should use the data obtained in the previous function)
   * 3-1)the function should show the temperature, weatherDescription, city name on screen
   *
   * 4)in the browser: you should show the loading... on screen while you starting the page and waiting for data to fetch
   * 4-1)in any reason when the data not fetched you should show the massage (Failed to fetch weather information. Please try again later.) on screen.
   * (hint: use .then().catch() )
   *
   * hint:path of data you need 👇
   * to access to city name =>data.city.name
   * to access to Temperature => data.list[0].main.temp
   * to access to description => data.list[0].weather[0].description

   */

const info = document.querySelector("#weather-info");
const status = document.querySelector("#status");

function fetchWeather(city) {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(apiUrl.replace("cityName", city));
    // console.log(res);

    // res.ok in if or =>
    if (res.status >= 200 && res.status <= 299) {
      const data = await res.json();
      // console.log(data);
      resolve(data);
    } else {
      reject("Failed to fetch weather information. Please try again later.");
    }
  });
}

async function setWeatherInfo(city) {
  try {
    const result = await fetchWeather(city);
    status.style.display = "none";
    // console.log(result);

    const cityName = document.createElement("p");
    cityName.innerText = `City: ${result.city.name}`;
    cityName.style.fontSize = "18px";

    const temperature = document.createElement("p");
    temperature.innerText = `Temperature: ${result.list[0].main.temp}°C`;
    temperature.style.fontSize = "18px";

    const weatherDescription = document.createElement("p");
    weatherDescription.innerText = `Weather: ${result.list[0].weather[0].description}`;
    weatherDescription.style.fontSize = "18px";

    info.append(cityName, temperature, weatherDescription);
  } catch (error) {
    status.innerText = error;
    status.style.fontSize = "18px";
    // console.error(error);
  }
}
setWeatherInfo("tehran");
