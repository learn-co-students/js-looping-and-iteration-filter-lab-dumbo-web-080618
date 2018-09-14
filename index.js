// Code your solution in this file
function findMatching (list, name) {
  return list.filter(function (n) {
    return n.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMatch (list, name) {
  let len = name.length;
  return list.filter(function (n) {
    return n.slice(0, len) === name;
  });
}

function matchName (list, name) {
  return list.filter(function (n) {
    return n.name.toLowerCase() === name.toLowerCase();
  });
}
