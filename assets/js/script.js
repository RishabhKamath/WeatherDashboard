const APIKey = '023a36acc8a97b00102fb10666b3912c'

// Get request to return lat and lon from the city search input
$(document).ready(function () {
    $("#searchButton").click(function () {
        var city = $("#cityInput").val();
        var apiKey = "023a36acc8a97b00102fb10666b3912c";
        var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + apiKey;

        //save search to local storage
        storeSearchInput(city);

        $.get(requestUrl, function (data) {
            console.log(data);
        });
    });
    displaySearchHistory();
});

function storeSearchInput(city) {
    // Get search history from local storage
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    // Add new search input to search history
    searchHistory.push(city);
    // Store updated search history in local storage
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }

  function displaySearchHistory() {
    // Get search history from local storage
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    // Loop over search history and add each search input to the search history list
    for (var i = 0; i < searchHistory.length; i++) {
      $("#search-history").append("<li>" + searchHistory[i] + "</li>");
    }
  };

$(document).ready(function () {
    $("#searchButton").click(function () {
        var city = $("#cityInput").val();
        var apiKey = "023a36acc8a97b00102fb10666b3912c";
        var requestUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
        $.get(requestUrl1, function (data) {
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var requestUrl2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
            $.get(requestUrl2, function (data) {
                console.log(data);
            });
        });
    }); 
})