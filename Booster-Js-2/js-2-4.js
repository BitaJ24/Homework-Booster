/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

let ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUK(nations, country) {
  return nations.includes(country); // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInUK(ukNations, "France"));
console.log(isInUK(ukNations, "Republic of Ireland"));
console.log(isInUK(ukNations, "England"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/
