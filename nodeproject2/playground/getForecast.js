const request = require('request');

request({
  url:'https://api.darksky.net/forecast/59857643d67fa68f3c70e8e9a3b084fa/51.0177826,-114.1949645?units=si',
  json: true,
}, (error, response, body) => {
  if(!error && response.statusCode === 200){
    console.log(body.currently.temperature);
  }else{
    console.log('unable to fetch weather');
  }
});
