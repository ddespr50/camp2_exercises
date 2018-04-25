const fetch = require("node-fetch");

function weatherByCityName (){
  return fetch ("http://api.openweathermap.org/data/2.5/weather?q=Lille&units=metric&appid=1695e88e832e8e5f80fe606f9b4751c6",
    {method:"POST"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result.main.temp + "°c");
    })
    .catch((error) => {
      console.warn(error);
    });
}

weatherByCityName();
