/**
 * /*
 *   CURRENCY FORMATTING
 *   ===================
 *   The business is expanding into a new market and needs to convert prices to USD.
 *   Write a function that converts a price from pounds (£) to USD ($). The current exchange rate is 1.4 USD to 1 pound.
 *
 * @format
 */

function convertToUSD(pound) {
  // 1 pound = 1.4 USD
  return pound * 1.4;
}

/*
  CURRENCY FORMATTING
  ===================
  The business is expanding into the Brazilian market. 
  Write a new function for converting pounds (£) to Brazilian real (BRL). The current exchange rate is 5.7 BRL to 1 GBP. 
  Additionally, the business has decided to add a 1% fee to all foreign transactions, meaning only 99% of the pound amount should be converted to BRL.
*/

function convertToBRL(pound) {
  // 1 pound = 5.7 BRL
  return (99 / 100) * pound * 5.7;
}

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
To run these tests type `node currencyConversion` into your terminal
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

test("convertToUSD function works", convertToUSD(32), 44.8);
test("convertToBRL function works", convertToBRL(30), 169.29);
