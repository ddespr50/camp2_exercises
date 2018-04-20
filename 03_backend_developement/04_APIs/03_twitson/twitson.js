const OAuth = require("OAuth");
const request = require ("request");


const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  "1.0A", null, "HMAC-SHA1"
);
// Put the express, port and OAuth initialization here...

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const url2 = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

// Again, replace string by your credentials.
oauth.get(url + "olbesancenot", process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
  if (error) {
    // console.log(error);
  }
  else {

    const dataObjet= JSON.parse(data);
    const dataText= dataObjet.map(element => {
      return element.text;
    });

    const text = dataText.join();
    const uri = encodeURI(url2 + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
    console.log(uri);
    let counter = 1;
    dataText.forEach(element => {

      console.log(counter+"-"+element);


      request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
        // console.log(text);
        console.log(body);
      });

      counter++;
    });
  }
});






console.log(auth);
