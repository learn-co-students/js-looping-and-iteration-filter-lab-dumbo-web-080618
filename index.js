// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, char) {
  return drivers.filter(d => d[0] === char[0])
}

function matchName(drivers, name) {
  return drivers.filter(obj => 
     obj["name"] === name
  )
}

// function deepIterator (target) {
//   if (typeof target === 'object') {
//     for (const key in target) {
//       deepIterator(target[key]);
//     }
//   } else {
//     console.log(target);
//   }
// }
