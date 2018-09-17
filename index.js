// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(driver => driver === string || driver[0] === string[0].toLowerCase());
};

function fuzzyMatch(drivers,name){
  return drivers.filter(driver => driver[0].toLowerCase() === name[0].toLowerCase());
};

function matchName(drivers,name) {
  return drivers.filter(driver => driver["name"]=== name)

};
