const request = require('request');

var geoCodeAddress = (unecodedAddress, callback) => {

  var address = encodeURIComponent(unecodedAddress);
  // console.log(address);

  request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json: true
      }, (error, response, body) => {
        // console.log(JSON.stringify(error, undefined, 2));
        // console.log(JSON.stringify(response.statusCode, undefined, 2));

        if (error) {
          callback('Unable to connect to Google Servers.');
        } else if(body.status === 'ZERO_RESULTS') {
          callback('Invalid Address.');
        } else if (body.status === 'OK') {
          callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            Longitude: body.results[0].geometry.location.lng
          })
        }

    });

}



module.exports = {
  geoCodeAddress
}
