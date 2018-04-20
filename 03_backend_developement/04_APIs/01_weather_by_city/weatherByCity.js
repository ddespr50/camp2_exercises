const request = require ("request");



function weatherByCityName(Lille){
  request(
    {
      url:`http://api.openweathermap.org/data/2.5/weather?q=${Lille}&units=metric&appid=1695e88e832e8e5f80fe606f9b4751c6`,
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error);
      // console.log("result:", result);
      console.log(((JSON.parse(result)).main.temp)+"°C");
    }
  );
}

module.exports = weatherByCityName;
//weatherByCityName("lille");
