// const request = require('request');
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address of location',
      string: true,
    },
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('unable to find the address');
  }
  var latitude = response.data.results[0].geometry.location.lat;
  var longitude = response.data.results[0].geometry.location.lng;
  var weatherURL = `https://api.darksky.net/forecast/59857643d67fa68f3c70e8e9a3b084fa/${latitude},${longitude}?units=si`;

  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherURL);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`its currently ${temperature}. It feels like ${apparentTemperature}`);
})
.catch((e) => {
  if(e.code === 'ENOTFOUND'){
    console.log('unable to connect to servers');
  }else{
    console.log(e.message);
  }
});
