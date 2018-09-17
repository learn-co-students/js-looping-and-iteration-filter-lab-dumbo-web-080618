// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(function (driver) {
    return driver.startsWith(str);
  });
}


// Ruby Equivalent
// drivers.select do |driver|
//   driver.startsWith(str)
// end

function matchName(drivers, str) {
  return drivers.filter(function (driver){
    return driver.name === str;
  });
}
