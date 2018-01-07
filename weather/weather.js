const request = require('request');
const APIKey = 'a45846d535ed80c8b812761af30af398';

var fetchWeather = (lat, lng, callback) => {

var weatherURI = `https://api.darksky.net/forecast/${APIKey}/${lat},${lng}`;

request({
  url: weatherURI,
  json: true
}, (error, response, body) => {

  if(!error && response.statusCode === 200){
    callback(undefined, body.currently.temperature);
  }else{
    callback('Unable to fetch current Weather.',undefined);
  }
});
};

module.exports = {
  fetchWeather
}
