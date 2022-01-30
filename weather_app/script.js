'use strict';

let lat = 12, lng = 80;

// const success = (position) => {

//     lat = position.coords.latitude;
//     lng = position.coords.longitude;

//     console.log(lat, lng)
//     return position;

// }

// const err = (error) => {
//     console.error(error);
// };


// navigator.geolocation.getCurrentPosition(success, err)


// const weatherRequest = new XMLHttpRequest();

// weatherRequest.open('GET', `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}.5&lon=${lng}`);

// weatherRequest.setRequestHeader("x-rapidapi-host", "weatherbit-v1-mashape.p.rapidapi.com");
// weatherRequest.setRequestHeader("x-rapidapi-key", "de91c2b642mshbce59aac48eaec1p1d1cd3jsnb154cb09350f");

// weatherRequest.send();
// weatherRequest.onload = function () {
//     let data = JSON.parse(weatherRequest.response);

//     console.log(data)

//     data.data.forEach(v => {
//         console.log(`

//             weather : ${v.weather.description},
//             temprature: ${v.temp},
//             windspeed : ${v.wind_spd}'
//             time_local : ${v.timestamp_local}

//         `)
//     })
// }

// const sunTimeRequest = new XMLHttpRequest();

// sunTimeRequest.open("GET", `https://sunrise-sunset-times.p.rapidapi.com/getSunriseAndSunset?date=2022-01-31&latitude=${lat}&longitude=${lng}&timeZoneId=America%2FNew_York`);
// sunTimeRequest.setRequestHeader("x-rapidapi-host", "sunrise-sunset-times.p.rapidapi.com");
// sunTimeRequest.setRequestHeader("x-rapidapi-key", "de91c2b642mshbce59aac48eaec1p1d1cd3jsnb154cb09350f");

// sunTimeRequest.send();

// sunTimeRequest.onload = function () {
//     let suntimeData = JSON.parse(sunTimeRequest.response);

//     let x = suntimeData.sunrise;
//     console.log(x.indexOf('T'))
//     console.log(x.slice(11, 16))
//     console.log(`
//               sunset : ${suntimeData.sunrise},
//               sunraise  : ${suntimeData.sunset}

//         `, suntimeData, x)
// }

let now = new Date();

console.log(`${}`)



