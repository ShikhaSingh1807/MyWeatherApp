
//making object of weatherapi
const weatherApi = {
    key: "caa4876c67e67ad0dc6fbad49547d090",
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}

function validateCity(event) {
    //To avoid basic
    event.preventDefault();
    let city = document.getElementById('cityname').value;
    console.log('City name entered is : ' + city);

    //Checking for empty City i/p box , in case yes show alert else move ahead with API call
    if (city.length === 0 || city == '') {
        alert('Please enter Valid City Name');
    }
    else {
        getWeatherReport(city);
    }
}

//This function is called if the user has entered a valid city name and not kept the i/p box as empty
function getWeatherReport(city) {
    console.log('Inside getWeatherReport method');
    let url = `${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`;
    fetch(url).then((weather) => {
        // console.log(weather);
        return weather.json();//This method converts the data coming from API to JSON form so that it can be parsed further

    }).then((resp) => {
        console.log(resp);
        document.getElementById('showWeather').style.display = "block";
        let headContent = document.getElementById('head');
        headContent.innerHTML = `Weather in ${city} , India`;
        let description = document.getElementById('description');
        description.innerHTML = `Description : ${resp.weather[0].description} `;
        let temperature = document.getElementById('temperature');
        temperature.innerHTML = `Temperature :${Math.round(resp.main.temp)}&deg;C  `;
        let humidity = document.getElementById('humidity');
        humidity.innerHTML = `Humidity :${resp.main.humidity} %  `;
        let pressure = document.getElementById('pressure');
        pressure.innerHTML = `Air Pressure :${resp.main.pressure} mb  `;
        let windspeed = document.getElementById('windspeed');
        windspeed.innerHTML = `Wind Speed :${resp.wind.speed}  KMPH  `;
    });
}

