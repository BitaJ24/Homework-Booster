/*
John and his family went on a holiday and visited three different restaurants. The bills were: $124, $48, $268
To tip the waiter a fair amount, John created a simple tip calculator as a function. He likes to tip:
 - 20% of the bill when the bill is less than $50
 - 15% when the bill is between $50 and $200
 - 10% if the bill is more than $200
In the end, John would like to have two arrays:

An array containing all three tips (one for each bill).
An array containing all three final paid amounts (bill + tip).
*/

const bills = [124, 48, 268];
let tips = [];
let totalPaid = [];

function calculateTip(bill) {
  let tip = 0;
  bill.forEach((item) => {
    if (item < 50) {
      tip = +((20 / 100) * item).toFixed(1);
      tips.push(tip);
      totalPaid.push(tip + item);
    } else if (item > 50 && item < 200) {
      tip = +((15 / 100) * item).toFixed(1);
      tips.push(tip);
      totalPaid.push(tip + item);
    } else if (item > 200) {
      tip = +((10 / 100) * item).toFixed(1);
      tips.push(tip);
      totalPaid.push(tip + item);
    }
  });
}
calculateTip(bills);
console.log(`tips are ${tips}`);
console.log(`totalPaids are ${totalPaid}`);
