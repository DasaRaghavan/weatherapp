const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');
const weatherByAddr = require('./weatherByAddr/weatherByAddr');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;



geocode.geoCodeAddress(argv.a, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    //console.log(JSON.stringify(results, undefined,2));
    // console.log(results.latitude);
    // console.log(results.Longitude);
    forecast.forecast(results.latitude, results.Longitude, (errorMsg, results) => {
      console.log(results.currentTemperature);
    });
  }
});

// request({
//     url: `https://api.darksky.net/forecast/0d1bab6ac6ff3ce862b71847aa428622/35.7446966,-78.8645698`,
//     json: true
//     }, (error, response, body) => {
//
//       console.log(JSON.stringify(body.currently.temperature, undefined, 2));
//
//   });
//
//
//
//
// var URL = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`
