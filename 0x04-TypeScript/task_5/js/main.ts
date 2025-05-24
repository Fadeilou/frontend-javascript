interface MajorCredits {
  credits: number;
  __brand: "MajorCredits"; // Brand property
}

interface MinorCredits {
  credits: number;
  __brand: "MinorCredits"; // Brand property
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits"
  } as MajorCredits; // Assertion helps, or ensure returned object matches type
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits"
  } as MinorCredits;
}

// Example Usage (optional, for testing)
const major1: MajorCredits = { credits: 3, __brand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, __brand: "MajorCredits" };
const sumMajor = sumMajorCredits(major1, major2);
console.log("Sum of Major Credits:", sumMajor); // { credits: 7, __brand: "MajorCredits" }

const minor1: MinorCredits = { credits: 1, __brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 2, __brand: "MinorCredits" };
const sumMinor = sumMinorCredits(minor1, minor2);
console.log("Sum of Minor Credits:", sumMinor); // { credits: 3, __brand: "MinorCredits" }

// The following would (and should) cause a type error if uncommented:
// const mixedSum = sumMajorCredits(major1, minor1); // Error: minor1 is not MajorCredits

export {}; // Ensures this file is treated as a module
