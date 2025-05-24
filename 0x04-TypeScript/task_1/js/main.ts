// Task 1: Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows any other attribute
}

// Example for Task 1
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Example of an additional attribute
};

console.log("Task 1 Teacher:", teacher3);

// Task 2: Extending the Teacher interface (Directors interface)
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example for Task 2
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log("Task 2 Director:", director1);

// Task 3: Printing teachers function and interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example for Task 3
console.log("Task 3 printTeacher:", printTeacher("John", "Doe")); // Output: J. Doe

// Task 4: Writing a class StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// To satisfy StudentConstructor interface (optional, for demonstration of usage)
// const StudentClassInstance: StudentConstructor = StudentClass;

// Example for Task 4
const studentInstance = new StudentClass("Alice", "Wonderland");
console.log("Task 4 Student displayName:", studentInstance.displayName()); // Alice
console.log("Task 4 Student workOnHomework:", studentInstance.workOnHomework()); // Currently working

export {}; // Ensures this file is treated as a module
