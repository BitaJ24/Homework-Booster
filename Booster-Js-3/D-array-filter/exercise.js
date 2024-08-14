/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsByIndexRaw` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

const pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

let pairsByIndex = pairsByIndexRaw.filter(
  (item) => Boolean(item) && item.length === 2
); // Complete this statement
// we can also use Array.isArray(value)

console.log(pairsByIndex);
const students = ["Javad", "Anahid", "Mina", "Atena"];
const mentors = ["Shirin", "Bahar", "Maryam", "Ayda"];

const pairs = pairsByIndex.map(function (indexes) {
  const student = students[indexes[0]];
  const mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
