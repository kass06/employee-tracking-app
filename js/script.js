// Sample data (You would connect this to a backend API for live data)
const employees = [
    { name: "John Doe", email: "johndoe@example.com", position: "Software Engineer", id: 1 },
    { name: "Thato Kgomo", email: "ThatoKgomo@example.com", position: "Project Manager", id: 2 }
];

// References to the HTML elements
const employeeCountElem = document.getElementById("employeeCount");
const activeEmployeesElem = document.getElementById("activeEmployees");
const employeeListElem = document.getElementById("employeeList");
const employeeForm = document.getElementById("employeeForm");
const employeeNameInput = document.getElementById("employeeName");
const employeeEmailInput = document.getElementById("employeeEmail");
const employeePositionInput = document.getElementById("employeePosition");

// Update the dashboard data
function updateDashboard() {
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(emp => emp.position !== "Inactive").length;

    employeeCountElem.textContent = totalEmployees;
    activeEmployeesElem.textContent = activeEmployees;
}

// Render employee list
function renderEmployeeList() {
    employeeListElem.innerHTML = "";
    employees.forEach(emp => {
        const empCard = document.createElement("div");
        empCard.classList.add("employee-card");
        empCard.innerHTML = `
            <h4>${emp.name}</h4>
            <p>${emp.position}</p>
            <p>${emp.email}</p>
        `;
        employeeListElem.appendChild(empCard);
    });
}

// Handle adding a new employee
employeeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const newEmployee = {
        name: employeeNameInput.value,
        email: employeeEmailInput.value,
        position: employeePositionInput.value,
        id: employees.length + 1
    };

    employees.push(newEmployee);
    renderEmployeeList();
    updateDashboard();
    
    // Clear the form
    employeeForm.reset();
});

// Initial call to render the data
renderEmployeeList();
updateDashboard();
