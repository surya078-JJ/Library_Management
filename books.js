let books = JSON.parse(localStorage.getItem("books")) || [];

function displayBooks() {
    let table = document.getElementById("bookTable");
    table.innerHTML = "";

    books.forEach((b, index) => {
        table.innerHTML += `
        <tr>
            <td>${b.id}</td>
            <td>${b.title}</td>
            <td>${b.author}</td>
            <td>${b.quantity}</td>
            <td>
                <button onclick="deleteBook(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function addBook() {
    let id = document.getElementById("bookId").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let quantity = document.getElementById("quantity").value;

    if (id === "" || title === "" || author === "" || quantity === "") {
        alert("All fields required");
        return;
    }

    books.push({
        id,
        title,
        author,
        quantity: Number(quantity)
    });

    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();

    document.getElementById("bookId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("quantity").value = "";
}

function deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
}

displayBooks();
