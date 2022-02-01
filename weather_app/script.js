'use strict';


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

        console.log(data)

        console.log(`

                 sunrise: ${data.city.sunrise},
                 sunset : ${data.city.sunset},
         `)

        data.list.forEach(v => {
            console.log(`

                    timestamp: ${v.dt},
                    humidity: ${v.main.humidity},
                    weather:${v.weather[0].description},
                    temperature:${v.main.temp}

             `)
        })
    }
}



navigator.geolocation.getCurrentPosition(success, err)