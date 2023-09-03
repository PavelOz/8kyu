// Problem 1: Traffic Light
// Complete the function that takes a string as an argument representing the current state of the light
// and returns a string representing the state the light should change to.
function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
    default:
      return "Invalid color";
  }
}

// Problem 2: Square or Rectangle
// You are given the length and width of a 4-sided polygon.
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : 2 * (l + w);
};

// Problem 3: Reverse String
// Complete the solution so that it reverses the string passed into it.
function solution(str) {
  return str.split("").reverse().join("");
}

// Problem 4: Playing Banjo
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

// Problem 5: Find Average
// Write a function which calculates the average of the numbers in a given list.
function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, val) => acc + val, 0) / array.length;
}

// Problem 6: Hydration during cycling
// Nathan drinks 0.5 liters of water per hour.
// Return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
  return Math.floor(time * 0.5);
}

// Problem 7: Filter list
// Create a function that takes a list of non-negative integers and strings
// and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter((item) => typeof item === "number");
}

// Problem 8: DNA Strand
// Given one side of DNA, return the complementary side.
function DNAStrand(dna) {
  const complements = { A: "T", T: "A", C: "G", G: "C" };
  return dna
    .split("")
    .map((nucleotide) => complements[nucleotide])
    .join("");
}

// Problem 9: Love Flower
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
function lovefunc(flower1, flower2) {
  return (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  );
}

// Problem 10: Basic Operations
// Create a function that does four basic mathematical operations.
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      if (value2 === 0) return "Cannot divide by zero";
      return value1 / value2;
    default:
      return "Invalid operation";
  }
}
