// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

const add100 = (num) => {
  return num * 100;
};

let solutionOne = numbers.map(add100);
let solutionTwo = numbers.map(function (num) {
  return num * 100;
});

let solutionThree = numbers.map((num) => num * 100);

console.log(solutionOne, solutionTwo, solutionThree);
