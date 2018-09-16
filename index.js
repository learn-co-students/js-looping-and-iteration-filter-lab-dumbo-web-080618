function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() ===  name.toLowerCase()
  });
}

function fuzzyMatch(drivers, letter) {
    let idx = letter.length
  return drivers.filter(function (driverName) {
    return driverName.slice(0, idx).toLowerCase() === letter.toLowerCase()
  })
}

function matchName(data, name) {
  return data.filter(function (user) {
    return user.name ===  name
  });
}
