const APIKey = '023a36acc8a97b00102fb10666b3912c'

// Get request to return lat and lon from the city search input
$(document).ready(function() {
    $("#searchButton").click(function() {
      var city = $("#cityInput").val();
      var apiKey = "023a36acc8a97b00102fb10666b3912c";
      var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + apiKey;
      $.get(requestUrl, function(data) {
          console.log(data);
      });
    });
  });