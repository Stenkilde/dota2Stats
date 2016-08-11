const url = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=2562671370&key=18FD28D1271106499AB022B2217EBA62';
const request = require('request');

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})