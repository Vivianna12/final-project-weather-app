function changeWeatherValue(response) {
  let tempElement = document.querySelector("#temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = temperature;
  descriptionElement.innerHTML = response.data.condition.description;
}

function searchCity(city) {
  let apiKey = "f42atbc02aod4017c837cbfe1c70ef22";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(changeWeatherValue);
}

function handleSearchForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchForm);

searchCity("Bronx");
