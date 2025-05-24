interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 23,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

// Function to render the table
const renderTable = (students: Student[]): void => {
  const tableBody = document.querySelector("#studentTable tbody");

  if (tableBody) {
    students.forEach(student => {
      const row = document.createElement("tr");

      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
      row.appendChild(locationCell);

      tableBody.appendChild(row);
    });
  }
};

// Render the table when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderTable(studentsList);
});

export {}; // Ensures this file is treated as a module
