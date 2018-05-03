const fetch = require ("node-fetch");

function weather(){
  return fetch ("http://api.openweathermap.org/data/2.5/weather?q=Lille&units=metric&appid=f431a235023298295e0b141417f40a58")
    .then ((response) => response.json())
  }
module.exports={
  weather:weather
};
