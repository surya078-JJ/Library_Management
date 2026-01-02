let books = JSON.parse(localStorage.getItem("books")) || [];
let issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];

function displayBooks() {
    let table = document.getElementById("bookTable");
    table.innerHTML = "";

    books.forEach(b => {
        table.innerHTML += `
        <tr>
            <td>${b.id}</td>
            <td>${b.title}</td>
            <td>${b.author}</td>
            <td>${b.quantity}</td>
        </tr>
        `;
    });
}

function viewMyBooks() {
    let studentId = document.getElementById("studentId").value;
    let table = document.getElementById("issuedTable");
    table.innerHTML = "";

    if (!studentId) {
        alert("Enter Student ID");
        return;
    }

    let myBooks = issuedBooks.filter(i => i.studentId === studentId);

    myBooks.forEach(i => {
        table.innerHTML += `
        <tr>
            <td>${i.bookId}</td>
            <td>${i.issueDate}</td>
            <td>${i.returnDate}</td>
        </tr>
        `;
    });
}

function logout() {
    window.location.href = "index.html";
}

displayBooks();
