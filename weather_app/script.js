'use strict';

//DOM Elements

const place = document.querySelector('.place');
const mainTemp = document.querySelector('.temperature');
const mainWeather = document.querySelector('.displayBtn');
const humidity = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');
const wind = document.querySelector('.wind');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const todaysForecast = document.querySelector('.today_forecast');
const weekForecast = document.querySelector('.weeks_forecast');



const success = (position) => {

    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    link(lat, lng);

}

const err = (error) => {
    console.error(error);
};

const link = (lat, lng) => {


    const weatherRequest = new XMLHttpRequest();

    weatherRequest.open('GET', `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=8dbd483a60dfe6f894a00bc08dba7e18`);

    weatherRequest.send();
    weatherRequest.onload = function () {
        let data = JSON.parse(weatherRequest.response);


        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


        let obj = {
            city: data.city.name,
            temp: [],
            weatherDes: [],
            timeStamp: [],
            dateTime: [],
            humidity: [],
            pressure: [],
            windSpd: [],
            sunrise: data.city.sunrise,
            sunset: data.city.sunset,
            timeZone: data.city.timezone,
            iconId: [],
            main: []
        }


        // Timestamp conversion;
        const timeStampConversion = (ts, tz) => {

            let timeAndDate = new Date(ts * 1000 - tz * 1000);

            let date_ts = String(timeAndDate.getDate()).padStart(2, 0);
            let month_ts = String(timeAndDate.getMonth() + 1).padStart(2, 0);
            let year_ts = timeAndDate.getFullYear();
            let hour_ts = String(timeAndDate.getHours()).padStart(2, 0);
            let min_ts = String(timeAndDate.getMinutes()).padStart(2, 0);
            let day_ts = timeAndDate.getDay();

            let time_arr = [date_ts, month_ts, year_ts, hour_ts, min_ts, day_ts];

            return time_arr;
        }


        data.list.forEach((v, i) => {

            obj.timeStamp[i] = v.dt;
            obj.dateTime[i] = v.dt_txt;
            obj.humidity[i] = v.main.humidity;
            obj.temp[i] = v.main.temp;
            obj.weatherDes[i] = v.weather[0].description;
            obj.pressure[i] = v.main.pressure;
            obj.windSpd[i] = v.wind.speed;
            obj.iconId[i] = v.weather[0].icon;

            let str = v.weather[0].main;
            str = str.charAt(0).toLowerCase() + str.slice(1);
            obj.main[i] = str;

        });



        //   Main display;

        let cel, pre, spd;
        const kelvin2Celsius = (temp) => cel = Math.trunc(temp - 273.15);
        const hA2Bar = (p) => pre = parseFloat(p / 1000).toFixed(2);
        const mi2km = (mi) => spd = Math.round(0.6213711922 * mi);



        place.value = obj.city;
        mainTemp.value = `${kelvin2Celsius(obj.temp[0])}\u00B0`;
        mainWeather.innerHTML = obj.weatherDes[0];

        // Pres/ Humidity wind speed

        humidity.innerHTML = `${obj.humidity[0]}%`;
        pressure.innerHTML = `${hA2Bar(obj.pressure[0])}Bar`;
        wind.innerHTML = `${mi2km(obj.windSpd[0])}km/hr`;


        // Sunrise and sun set:




        // Todays forecast
        let wetDes;

        for (let i = 2; i < 7; i++) {



            (obj.main[i] !== `clouds` && obj.main[i] !== 'thunderstrom' && obj.main[i] !== 'drizzle' && obj.main[i] !== 'rain' && obj.main[i] !== 'snow' && obj.main[i] !== 'clear') ? wetDes = 'fog' : wetDes = obj.main[i];

            let loop_arr = timeStampConversion(obj.timeStamp[i], obj.timeZone);


            todaysForecast.insertAdjacentHTML('beforeend',
                `  <div class="today_next_1hr_${i} today_time">
            <div class="time_${i}">${loop_arr[3]}:${loop_arr[4]}</div>
            <div class="img_${i} t_img">
                <img src="./images/${wetDes}.svg" alt ="icon">
            </div>
            <div class="temp_1"> ${kelvin2Celsius(obj.temp[i])}\u00B0</div>

        </div>`
            )

        };

        //  Weeks forecast:
        let week_forecast = [], week_temp = [], week_main = [];

        obj.timeStamp.forEach((v, i) => {

            let x = timeStampConversion(v, obj.timeZone);

            if (x[3] === '00') {
                week_forecast.push(x[5]);
                week_temp.push(kelvin2Celsius(obj.temp[i]));
                week_main.push(obj.main[i]);

            }
        });


        for (let i = 0; i < week_forecast.length; i++) {

            (obj.main[i] !== `clouds` && obj.main[i] !== 'thunderstrom' && obj.main[i] !== 'drizzle' && obj.main[i] !== 'rain' && obj.main[i] !== 'snow' && obj.main[i] !== 'clear') ? wetDes = 'fog' : wetDes = obj.main[i];

            weekForecast.insertAdjacentHTML('beforeend',
                ` <div class="day_${i} day">
          <div class="week">${week[week_forecast[i]]}</div>
          <div class="img_1 t_img">
          <img src="./images/${wetDes}.svg" alt ="icon">
          </div>
          <div class="temp_2">${kelvin2Celsius(obj.temp[i])}\u00B0</div>`)


        };

    }
}



navigator.geolocation.getCurrentPosition(success, err)







