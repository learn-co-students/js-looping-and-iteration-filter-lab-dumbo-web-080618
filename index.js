// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(driver => driver === string || driver[0] === string[0].toLowerCase());
};

function fuzzyMatch(drivers, string){
  return drivers.filter(driver => driver[0].toLowerCase() === string[0].toLowerCase());
};


function matchName(drivers, string){
  return drivers.filter(driver => driver['name'] === string);
};
