/**
 * Finding a radio station, and a good one, can be hard manually.
 * Let's use some code to help us build a program that helps us scan
 * the radio waves for some good music.
 *
 * @format
 */

/**
 * First, let's create a function that creates a list of all the frequencies.
 * Call this function `getAllFrequencies`.
 *
 * This function should:
 * - Create an array  starting at 87 and ending in 108
 * - Should return this array to use in other functions
 */

// `getAllFrequencies` goes here
function getAllFrequencies() {
  let arrayOfFrequencies = [];
  for (let i = 87; i <= 108; i++) {
    arrayOfFrequencies.push(i);
  }
  return arrayOfFrequencies;
}

/**
 * Next, let's write a function that gives us only the frequencies that are radio stations.
 * Call this function `getStations`.
 *
 * This function should:
 * - Get the available frequencies from `getAllFrequencies`
 * - There is a helper function called isRadioStation that takes an integer as an argument and returns a boolean.(we wrote this function for you, you need just call it in your function)
 * - Return only the frequencies that are radio stations.
 */

//
// `getStations` goes here
function getStations() {
  const available = getAllFrequencies().filter((item) => isRadioStation(item));
  return available;
}

/* ======= TESTS - DO NOT MODIFY ======= */

function getAvailableStations() {
  // Using `stations` as a property as defining it as a global variable wouldn't
  // always make it initialized before the function is called
  if (!getAvailableStations.stations) {
    const stationCount = 4;
    const available = [];
    for (let i = 0; i < stationCount; i++) {
      let randomNum = Math.floor(Math.random() * (108 - 87 + 1) + 87);
      while (available.includes(randomNum)) {
        randomNum = Math.floor(Math.random() * (108 - 87 + 1) + 87);
      }
      available.push(randomNum);
    }

    available.sort((a, b) => a - b);
    getAvailableStations.stations = [...available];
  }
  return getAvailableStations.stations;
}

function isRadioStation(frequency) {
  return getAvailableStations().includes(frequency);
}

function test(testName, fn) {
  try {
    fn();
    console.log(`\n✅ ${testName}: PASS`);
  } catch (error) {
    console.log(
      `\n❌ ${testName}: FAIL (see details below)\n\n${error.message}`
    );
  }
}

function areDeeplyEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      throw new Error(
        `expected [${obj2}] but received ${
          Array.isArray(obj1) ? `[${obj1}]` : obj1
        }`
      );
    }

    return obj1.every((elem, index) => {
      return areDeeplyEqual(elem, obj2[index]);
    });
  }

  throw new Error(
    `expected [${obj2}] but received ${
      Array.isArray(obj1) ? `[${obj1}]` : obj1
    }`
  );
}

test("getAllFrequencies() returns all frequencies between 87 and 108", function () {
  const frequencies = getAllFrequencies();
  console.log(frequencies);
  areDeeplyEqual(
    frequencies,
    [
      87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103,
      104, 105, 106, 107, 108,
    ]
  );
});

test("getStations() returns all the available stations", () => {
  const stations = getStations();
  const available = getAvailableStations();
  areDeeplyEqual(stations, available);
});
