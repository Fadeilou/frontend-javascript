/// <reference path="./Teacher.ts" />
// The above reference might not be strictly needed if tsc compiles all files,
// but it's good for explicitness and editor intellisense.

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
