const {
  nextISSTimesForMyLocation,
} = require("./iss.js");

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

// const coords = { latitude: 43.7282, longitude: -79.2323 };

// fetchISSFlyOverTimes(coords, (error, data) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   return console.log("It worked! Returned flyover times", data);
// });

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
