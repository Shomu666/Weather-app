const button = document.getElementById("btn");
const image = document.getElementById("image");
const glass =
  '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div>';
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const humidity = document.getElementById('humidity_count');
const wind = document.getElementById('wind_speed');

const conditions = {
  Clear: "clear.png",
  Clouds: "clouds.png",
  Drizzle: "drizzle.png",
  Mist: "mist.png",
  Rain: "rain.png",
  Snow: "snow.png",
  Haze: "50d@2x.png",
};

button.innerHTML = glass;

const apiKey = "651aeb6ecb8f1a597af6543bafc33b3c";

const getWeather = async () => {
  let input = document.getElementById("search-input").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric`;
  try {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    temp.innerHTML = `${data.main.temp}°c`;
    city.innerHTML = data.name;
    if (data.weather[0].main) {
      image.src = conditions[data.weather[0].main];
    };
    humidity.innerHTML = data.main.humidity;
    wind.innerHTML = `${data.wind.speed}km/hr`;
    weather.style.display = 'block';

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener("click", getWeather);
