let books = JSON.parse(localStorage.getItem("books")) || [];
let students = JSON.parse(localStorage.getItem("students")) || [];
let issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];

function displayIssued() {
    let table = document.getElementById("issueTable");
    table.innerHTML = "";

    issuedBooks.forEach(i => {
        table.innerHTML += `
        <tr>
            <td>${i.studentId}</td>
            <td>${i.bookId}</td>
            <td>${i.issueDate}</td>
            <td>${i.returnDate}</td>
        </tr>
        `;
    });
}

function issueBook() {
    let studentId = document.getElementById("studentId").value;
    let bookId = document.getElementById("bookId").value;
    let issueDate = document.getElementById("issueDate").value;
    let returnDate = document.getElementById("returnDate").value;

    if (!studentId || !bookId || !issueDate || !returnDate) {
        alert("All fields required");
        return;
    }

    let studentExists = students.find(s => s.id === studentId);
    if (!studentExists) {
        alert("Student not found");
        return;
    }

    let book = books.find(b => b.id === bookId);
    if (!book || book.quantity <= 0) {
        alert("Book not available");
        return;
    }

    book.quantity--;

    issuedBooks.push({
        studentId,
        bookId,
        issueDate,
        returnDate
    });

    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

    displayIssued();

    document.getElementById("studentId").value = "";
    document.getElementById("bookId").value = "";
    document.getElementById("issueDate").value = "";
    document.getElementById("returnDate").value = "";
}

displayIssued();
