// Code your solution in this file
// Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, name){
  return drivers.filter(function(driver){ return driver.toLowerCase() === name.toLowerCase()})
}

// Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver){return driver.toLowerCase().indexOf(string.toLowerCase()) === 0})
}

// Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.

function matchName(drivers, string){
  return drivers.filter(function(driver){
    return driver.name === string
  })
}

