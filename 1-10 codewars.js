// Problem 1: Remove Characters from String
// Given a string str, remove characters from it.
function removeChar(str) {
  // Assuming that we want to remove the first and last characters
  return str.slice(1, -1);
}

// Problem 2: Sum of Positive Numbers in Array
// Given an array of numbers, return the sum of all the positive ones.
function positiveSum(arr) {
  return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
}

// Problem 3: Personalized Greeting
// Given name and owner, return a personalized greeting.
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// Problem 4: Hero Bullets and Dragons
// Check if hero can defeat all dragons with the bullets he has.
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

// Problem 5: Convert Boolean to Word
// Convert a boolean value to either 'Yes' or 'No'.
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// Problem 6: Grade Book
// Find the average of three scores and return the corresponding letter grade.
function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

// Problem 7: Find Needle in Haystack
// Find the needle in the array and return its position.
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

// Problem 8: Check if Array Contains Value
// Check if the array contains a specific value.
function check(a, x) {
  return a.includes(x);
}

// Problem 9: Remove Every Other Element
// Remove every second element from the array.
function removeEveryOther(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}

// Problem 10: Zero Fuel
// Check if it's possible to reach the pump with the remaining fuel.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

// Test Cases (You can add more for each problem)
console.log(removeChar("abcde")); // Should return 'bcd'
console.log(positiveSum([1, -4, 7, 12])); // Should return 20
console.log(greet("John", "Jane")); // Should return 'Hello guest'
console.log(hero(4, 2)); // Should return true
console.log(boolToWord(true)); // Should return 'Yes'
console.log(getGrade(85, 90, 92)); // Should return 'A'
console.log(findNeedle(["hay", "junk", "needle"])); // Should return "found the needle at position 2"
console.log(check([1, 2, 3], 2)); // Should return true
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove"])); // Should return ['Keep', 'Keep']
console.log(zeroFuel(50, 25, 2)); // Should return true
