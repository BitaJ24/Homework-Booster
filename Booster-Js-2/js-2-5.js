/**
 * /*
 *   The functions should return values that match the expected results.
 *
 * @format
 */

// Finish the isNegative function to test if the passed number is negative (less than zero)
function isNegative(number) {
  return number < 0;
}

// Finish the isBetweenZeroAnd10 function to test if the passed number is between 0 and 10
function isBetweenZeroAnd10(number) {
  return number > 0 && number < 10;
}

/* 
    DO NOT EDIT BELOW THIS LINE
    --------------------------- */
let number = 5;
let numberNegative = isNegative(number);
let numberBetweenZeroAnd10 = isBetweenZeroAnd10(number);
console.log("The number in test is " + number);
console.log("Is the number negative? " + numberNegative);
console.log("Is the number between 0 and 10? " + numberBetweenZeroAnd10);

/* 
    EXPECTED RESULT
    ---------------
    The number in test is 5
    Is the number negative? false
    Is the number between 0 and 10? true
  */
