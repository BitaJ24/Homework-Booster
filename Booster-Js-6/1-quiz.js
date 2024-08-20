const apiKey = '';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=CityName&units=imperial&appid=${apiKey}`;

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
