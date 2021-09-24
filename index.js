const { fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes} = require('./iss.js');


const coords = { latitude: 43.7282, longitude: -79.2323 };

fetchISSFlyOverTimes(coords, (error, data) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  return console.log("It worked! Returned flyover times", data);
});


// fetchCoordsByIP('174.91.121.52', (error, data) => {
//   if (error) {
//     return console.log(error);
//   }
//   return console.log(data);
// });



// fetchMyIP((error, ip) => {
//   if (error) {
//    return  console.log("It didn't work!" , error);
//     ;
//   }

//   return console.log('It worked! Returned IP:' , ip);
// });

