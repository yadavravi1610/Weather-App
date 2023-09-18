let apikey = "76520b3a65ce5d4b18d80fe956ccd234";

let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbox = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');

async function checkWeather(city){
    let response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data =await response.json();
    // var d = JSON.parse(data);

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.Wind').innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds")
    {
        document.querySelector(".weather-icon").src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        document.querySelector(".weather-icon").src = "images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        document.querySelector(".weather-icon").src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        document.querySelector(".weather-icon").src = "images/mist.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        document.querySelector(".weather-icon").src = "images/rain.png";
    }
    else if(data.weather[0].main == "Snow")
    {
        document.querySelector(".weather-icon").src = "images/snow.png";
    }
}

searchBtn.addEventListener('click', () =>{
    checkWeather(searchbox.value);

})


// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4e1da26adbmsh5b4b3bfce56bce3p106d87jsn1507f8cabae7',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {

//     async function check(){
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
//     }

//     check();
// } catch (error) {
// 	console.error(error);
// }

// var city = 'london'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });