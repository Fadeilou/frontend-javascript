// Task 5: Advanced types Part 1

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Example for Task 5
console.log("Task 5 createEmployee(200):", createEmployee(200)); // Teacher
console.log("Task 5 createEmployee(1000):", createEmployee(1000)); // Director
console.log("Task 5 createEmployee('$500'):", createEmployee('$500')); // Director


// Task 6: Creating functions specific to employees

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
  // Or: return employee instanceof Director; (if classes are distinct enough)
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Example for Task 6
console.log("Task 6 executeWork(createEmployee(200)):");
executeWork(createEmployee(200)); // Getting to work

console.log("Task 6 executeWork(createEmployee(1000)):");
executeWork(createEmployee(1000)); // Getting to director tasks


// Task 7: String literal types

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return "Teaching Math";
  } else if (todayClass === 'History') {
    return "Teaching History";
  }
  // Fallback, though with literal types, not strictly necessary if all cases handled
  // but good for exhaustiveness checking if more subjects were added.
  const exhaustiveCheck: never = todayClass;
  return `Unknown class: ${exhaustiveCheck}`;
}

// Example for Task 7
console.log("Task 7 teachClass('Math'):", teachClass('Math')); // Teaching Math
console.log("Task 7 teachClass('History'):", teachClass('History')); // Teaching History

export {}; // Ensures this file is treated as a module
