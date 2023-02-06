let citySearch = $("#city-search");
let cityInput = $("#city-input");
let cityHistory = $("#history");
let weatherResults = $(".card-weather");
let searchHistoryList = $("#search-history");

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

$(citySearch).on('submit', function (e) {
    e.preventDefault();

    formSubmitHandler();

    $("form")[0].reset();
})