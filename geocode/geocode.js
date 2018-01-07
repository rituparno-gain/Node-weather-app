const request = require('request');

var fetchAddress = (address, callback) => {

var encodedAddress = encodeURIComponent(address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {

  if(error){
    callback('Unable to connect to Google servers.',undefined)
  }else if(body.status === 'ZERO_RESULTS'){
    callback('Address not found.',undefined);
  }else if(body.status === 'OK'){
    callback(undefined,{
      address: body.results[0].formatted_address,
      latitude: body.results[0].geometry.location.lat,
      longitude: body.results[0].geometry.location.lng
    })
 }
});
};

module.exports = {
  fetchAddress
}
