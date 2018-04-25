const fetch = require("node-fetch");

function weatherByCoordonate (){
  return fetch ("http://api.openweathermap.org/data/2.5/weather?lat=32.66134&lon=51.680374&units=metric&appid=1695e88e832e8e5f80fe606f9b4751c6",
    {method:"POST"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log("A " + result.name+" il fait "+result.main.temp + "°c.");
    })
    .catch((error) => {
      console.warn(error);
    });
}

weatherByCoordonate();
