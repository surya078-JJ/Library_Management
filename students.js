let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((s, index) => {
        table.innerHTML += `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.dept}</td>
            <td>${s.year}</td>
            <td>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function addStudent() {
    let id = document.getElementById("studentId").value;
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;

    if (id === "" || name === "" || dept === "" || year === "") {
        alert("All fields required");
        return;
    }

    students.push({
        id,
        name,
        dept,
        year
    });

    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();

    document.getElementById("studentId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("year").value = "";
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

displayStudents();
