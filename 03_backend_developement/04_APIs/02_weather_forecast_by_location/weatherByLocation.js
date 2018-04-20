const request = require ("request");



function weatherByLatitudeAndLongitude(){
  //function weatherByLatitudeAndLongitude(coordlong,coordlat)
  request(
    {
      url:"http://api.openweathermap.org/data/2.5/weather?lat=50.629249&lon=3.0572560&units=metric&appid=1695e88e832e8e5f80fe606f9b4751c6",
      //url:`http://api.openweathermap.org/data/2.5/weather?lat=${coordlat}&lon=${coordlong}&units=metric&appid=1695e88e832e8e5f80fe606f9b4751c6`
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error);
      // console.log("result:", result);
      console.log(((JSON.parse(result)).main.temp)+"°C");
    }
  );
}


//weatherByLatitudeAndLongitude();



function weatherByZipcode(){
  //function weatherByZipcode(zipcode,country)
  request(
    {
      url:"http://api.openweathermap.org/data/2.5/weather?zip=59000,fr&units=metric&appid=1695e88e832e8e5f80fe606f9b4751c6",
      // :`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&units=metric&appid=1695e88e832e8e5f80fe606f9b4751c6`
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error);
      // console.log("result:", result);
      console.log(((JSON.parse(result)).main.temp)+"°C");
    }
  );
}

//weatherByZipcode();

module.exports = {
  weatherByZipcode:  weatherByZipcode,
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude
};
