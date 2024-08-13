/*
  Array methods - .slice()
  ------------------------
  The variable `firstFive` should contain the first five items of `everyone`
  The variable `lastFive` should contain the last five items of `everyone`
*/

let everyone = [
  "Bahar",
  "Fatemeh",
  "Mahjan",
  "Arad",
  "Pedram",
  "AmirMostafa",
  "Mohsen",
];

let firstFive = everyone.slice(0, 5); // complete this statement
let lastFive = everyone.slice(-5); // complete this statement

/* 
    DO NOT EDIT BELOW THIS LINE
    --------------------------- */

console.log(firstFive);
console.log(lastFive);

/* 
    EXPECTED RESULT
    ---------------
    ["Bahar", "Fatemeh", "Mahjan", "Arad", "Pedram"]
    ["Mahjan", "Arad", "Pedram", "AmirMostafa", "Mohsen"]
  */
