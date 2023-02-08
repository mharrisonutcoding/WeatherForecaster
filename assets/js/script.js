let citySearch = $("#city-search");
let cityInput = $("#city-input");
let cityHistory = $("#history");
let results = $(".card-weather");
let searchHistoryList = $("#search-history");

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

function formSubmitHandler() {
  var cityName = $(cityInput)[0].value.trim() || results;

// Utilizing Geocoder API to convert city name to coordinates for OpenWeather One Call API 3.0

  var apiUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    ",&limit=1&appid=c2de449f7457b59ce42ea12a011784b6";

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].lon);
        // console.log(data[i].lat);
        var weatherUrl =
          "https://api.openweathermap.org/data/3.0/onecall?lat=" +
           data[0].lat +
          "&lon=" +
          data[0].lon +
          "&units=imperial&exclude=minutely,hourly,alerts&appid=c2de449f7457b59ce42ea12a011784b6";

        fetch(weatherUrl).then(function (res) {
          return res.json();
        }).then(function (data) {
            console.log(data)

        })
      }
    });
}

$(citySearch).on("submit", function (e) {
  e.preventDefault();

  formSubmitHandler();

  $("form")[0].reset();
});
