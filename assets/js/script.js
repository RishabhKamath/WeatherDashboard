const APIKey = '023a36acc8a97b00102fb10666b3912c'

let citySearchInput = document.getElementById('cityInput')
let citySearch = ''
let searchButton = document.getElementById('searchButton')
let sameDayURL = ''

searchButton.addEventListener('click', function () {
    citySearch = cityInput.value

    sameDayURL = 'http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={API key}' + citySearch + '&appid=' + APIKey + '&units=imperial'

    console.log(citySearch)

    let history = JSON.parse(localStorage.getItem('cities'))
    history.push(citySearch)
    localStorage.setItem('cities', JSON.stringify(history))

    SetWeather()
    displaySearches()
})

function SetWeather() {
    fetch(sameDayURL)
    .then(function(response2) {
        return response2.json()
    })
    .then(function(dailyWeather) {

        let todayTemp = dailyWeather.main.temp
        let todayWind = dailyWeather.wind.speed
        let todayHumidity = dailyWeather.main.humidity
        let todayIconCode = dailyWeather.weather[0].icon
        let todayIcon = 'https://openweathermap.org/img/w/' + todayIconCode + '.png'

        let chosenCity = document.getElementById('c-City')
        let currentTemp = document.getElementById('c-Temp')
        let currentWind = document.getElementById('c-Wind')
        let currentHumidity = document.getElementById('c-Humidity')

        chosenCity.textContent = citySearch + ' ' + today
        currentTemp.textContent = todayTemp
        currentWind.textContent = todayWind
        currentHumidity.textContent = todayHumidity

        let icon = document.getElementById('c-Icon')
        icon.setAttribute('src', todayIcon)
    })

    let getLatLongURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + citySearch + '&limit=1&appid=' + APIKey
    fetch(getLatLongURL)
    .then(function(response) {
        return response.json()
    })

    .then(function(latLong) {
        let cityLat = latLong[0].lat
        let cityLong = latLong[0].lon
        let FiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLong + '&appid=' + APIKey + '&units=imperial'
        fetch(FiveDayURL)
        .then(function(response3) {
        return response3.json()
        })

        .then(function(fiveDay) {
        console.log(fiveDay)
        

                let dayOne = moment().add(1, 'd').format('M/D/YYYY')
                let dayOneTemp = fiveDay.list[5].main.temp
                let dayOneWind = fiveDay.list[5].wind.speed
                let dayOneHumidity = fiveDay.list[5].main.humidity
                let dayOneIconCode = fiveDay.list[5].weather[0].icon
                let dayOneIcon = 'https:openweathermap.org/img/w/' + dayOneIconCode + '.png'
        
                let dayTwo = moment().add(2, 'd').format('M/D/YYYY')
                let dayTwoTemp = fiveDay.list[13].main.temp
                let dayTwoWind = fiveDay.list[13].wind.speed
                let dayTwoHumidity = fiveDay.list[13].main.humidity
                let dayTwoIconCode = fiveDay.list[13].weather[0].icon
                let dayTwoIcon = 'https:openweathermap.org/img/w/' + dayTwoIconCode + '.png'
        
                let dayThree = moment().add(3, 'd').format('M/D/YYYY')
                let dayThreeTemp = fiveDay.list[21].main.temp
                let dayThreeWind = fiveDay.list[21].wind.speed
                let dayThreeHumidity = fiveDay.list[21].main.humdity
                let dayThreeIconCode = fiveDay.list[13].weather[0].icon
                let dayThreeIcon = 'https:openweathermap.org/img/w/' + dayTwoIconCode + '.png'
        })})};  