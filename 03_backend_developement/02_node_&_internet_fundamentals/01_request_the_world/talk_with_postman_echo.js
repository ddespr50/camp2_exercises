const request = require("request");

function simpleGet(callback){
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, result) {
      return callback(result);
    }
  );
}
// function display (result){
//   console.log(result);
// }
//
//simpleGet(display);

function simpleGetWithParams(callback){
  request(
  //request.get( fonctionne aussi , dans ce cas on ne précise pas la methode ensuite
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      //url: "https://postman-echo.com/get?foo=bar&program=camp2&people[]=Frieda&people[]=Francis",
      method: "GET",
      // on peut également passer un object
      // form:
    },
    function(error, response, result) {
      return callback(JSON.parse(result).args); // on parse le result et on ne prend que les arguments
    //const resulParsed = JSON.parse(result);
    //callback(resulParsed.args)
    }
  );
}
// function display (result){
//   console.log(result);
// }
//
// simpleGetWithParams(display);


// on fait une fonction pour la date - 1er possibilité
function formatDate(date) {
  let month = "" + (date.getMonth() + 1),
    day = "" + date.getDate(),
    year = date.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
}

// // on fait une fonction pour la date - 2er possibilité

// function formatDate(){
//   let currentDate = new Date ();
//   const year = currentDate.getFullYear();
//   let month = currentDate.getMonth() + 1;
//   if (month < 10){
//     month = "0" + month;
//   }
//   let day = currentDate.getDate();
//   if (day < 10) {
//     day = "0" + day;
//   }
//   currentDate = year+ "-"+month+"-"+day;
//   return currentDate;
// }

//puis notre fonction
function validateTimestamp(callback){
  //const currentDate = formatDate();
  request(
    {
      url: "https://postman-echo.com/time/valid?timestamp=" + formatDate(new Date()),
      //url: "https://postman-echo.com/time/valid?timestamp=" + currentDate,
      method: "GET",
    },
    function(error, respose, result) {
      callback((result));
      console.log("result:", result);
    }
  );
}
//le module.exports se place toujours à la fin du fichier
module.exports ={
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
