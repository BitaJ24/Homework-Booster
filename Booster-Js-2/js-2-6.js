/**
 * /*
 *   SALES TAX
 *   =========
 *   A business requires a program that calculates the total price of a product including sales tax.
 *   Sales tax is 20% of the of the original price.
 *
 * @format
 */

function calculateSalesTax(price) {
  return (20 / 100) * price + price;
}

/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that adds tax to a number, and then transforms the total into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function addTaxAndFormatCurrency(price) {
  return `£${calculateSalesTax(price).toFixed(2)}`;
}

////////////////////////

/* 

===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

===================================================
*/

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("calculateSalesTax function - case 1 works", calculateSalesTax(15), 18);
test("calculateSalesTax function - case 2 works", calculateSalesTax(17.5), 21);
test("calculateSalesTax function - case 3 works", calculateSalesTax(34), 40.8);

test(
  "addTaxAndFormatCurrency function - case 1 works",
  addTaxAndFormatCurrency(15),
  "£18.00"
);
test(
  "addTaxAndFormatCurrency function - case 2 works",
  addTaxAndFormatCurrency(17.5),
  "£21.00"
);
test(
  "addTaxAndFormatCurrency function - case 3 works",
  addTaxAndFormatCurrency(34),
  "£40.80"
);
