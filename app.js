const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options(
      {
        address: {
          alias: 'a',
          demand: true,
          describe: 'Address to fetch weather for.',
          string: true
        }
      }
    )
    .help()
    .alias('help','h')
    .argv;

geocode.fetchAddress(argv.address, (errorMessage,results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log('Below are the details:');
    console.log(`Address specified: ${results.address}`);
    weather.fetchWeather(results.latitude,results.longitude, (errm, currentTemp) => {
      console.log(`Current temperature is: ${currentTemp} degrees.`);
    });
  }
});
