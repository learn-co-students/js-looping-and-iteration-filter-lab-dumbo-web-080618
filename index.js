// Code your solution in this file
function findMatching(drivers, name){

 let sameCaseName  = name.toUpperCase();
 return drivers.filter(function(ele){
   return sameCaseName == ele.toUpperCase();
   

    
  });  
  
}

function fuzzyMatch(drivers, string){
  const allUp = string[0].toUpperCase();
  return drivers.filter(function(ele){
    return ele[0].toUpperCase() == allUp;
  });
  
}


function matchName(drivers, string){
  return drivers.filter(function(ele){
    return ele.name == string;
    
  });
  
}


