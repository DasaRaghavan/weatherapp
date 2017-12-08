const request = require('request');

const apiKey = '0d1bab6ac6ff3ce862b71847aa428622';
//https://api.darksky.net/forecast/0d1bab6ac6ff3ce862b71847aa428622/35.7446966,-78.8645698



var forecast = (lat, lng, callback) => {

  var URL = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`
  request({
      url: URL,
      json: true
      }, (error, response, body) => {
        if (!(error) && (response.statusCode === 200)) {

          callback(undefined, {
            currentTemperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
          });
        } else {
          callback('Unable to connect to darksky api Servers.');
        }
    });
}

module.exports = {
  forecast
}
