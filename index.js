// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter( function (name1) {
    return name1.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch(arr, name) {
  // return arr.filter ( function (name1) {
  //   return name1.charAt(1) === name.charAt(1);
  // })
  let len = name.length;
  return arr.filter ( function (n) {
    debugger;
    return n.slice(0, len) === name;
  })
}

function matchName(arr, name) {
  return arr.filter(function (n) {
    return n.name === name;
  })
}
