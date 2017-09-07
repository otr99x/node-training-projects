const request = require('request');

module.exports = {
  getWeather: (latitude, longitude, callback) => {
    request({
      url:`https://api.darksky.net/forecast/59857643d67fa68f3c70e8e9a3b084fa/${latitude},${longitude}?units=si`,
      json: true,
    }, (error, response, body) => {
      if(!error && response.statusCode === 200){
        var result = {
          currentTemp : body.currently.temperature,
          apparentTemp : body.currently.apparentTemperature,
        };
        callback(undefined, result);
      }else{
        callback('unable to fetch weather', undefined);
      }
    });
  },
};
