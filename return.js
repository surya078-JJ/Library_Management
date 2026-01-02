let books = JSON.parse(localStorage.getItem("books")) || [];
let issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];

function displayIssued() {
    let table = document.getElementById("returnTable");
    table.innerHTML = "";

    issuedBooks.forEach((i, index) => {
        table.innerHTML += `
        <tr>
            <td>${i.studentId}</td>
            <td>${i.bookId}</td>
            <td>${i.issueDate}</td>
            <td>${i.returnDate}</td>
            <td>
                <button onclick="returnByIndex(${index})">Return</button>
            </td>
        </tr>
        `;
    });
}

function returnBook() {
    let studentId = document.getElementById("studentId").value;
    let bookId = document.getElementById("bookId").value;

    if (!studentId || !bookId) {
        alert("Enter Student ID and Book ID");
        return;
    }

    let index = issuedBooks.findIndex(
        i => i.studentId === studentId && i.bookId === bookId
    );

    if (index === -1) {
        alert("Issued record not found");
        return;
    }

    let book = books.find(b => b.id === bookId);
    if (book) {
        book.quantity++;
    }

    issuedBooks.splice(index, 1);

    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

    displayIssued();

    document.getElementById("studentId").value = "";
    document.getElementById("bookId").value = "";
}

function returnByIndex(index) {
    let bookId = issuedBooks[index].bookId;

    let book = books.find(b => b.id === bookId);
    if (book) {
        book.quantity++;
    }

    issuedBooks.splice(index, 1);

    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

    displayIssued();
}

displayIssued();
