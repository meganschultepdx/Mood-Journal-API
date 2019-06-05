export class WeatherService {
  getWeatherByCity(city) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let key = process.env.API_KEY;
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}