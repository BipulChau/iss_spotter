/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  const url = "https://api.ipify.org?format=json";
  request(url, (error, response, body) => {
    //console.log(body)
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    const ip = data.ip;
    return callback(null,ip);
  
  });

};

const fetchCoordsByIP = function(ipString, callback) {
  request(`https://freegeoip.app/json/${ipString}`, (error, response, body) =>{
  //console.log (body)
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = (`Status Code ${response.statusCode} when fetching coordinates of IP. Response: ${body}`);
      return callback(Error(msg), null);
    }
  
    const {latitude, longitude} = JSON.parse(body);
    return callback(null, {latitude, longitude});


  
  });
};

module.exports = { fetchMyIP,
  fetchCoordsByIP};



