function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  })
}


function fuzzyMatch(drivers, name) {
  return drivers.filter(function(driver) {
        // debugger
  return driver.startsWith(name)
  })
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  })
}
