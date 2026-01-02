function signup() {
    let role = document.getElementById("role").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (role === "" || username === "" || password === "") {
        document.getElementById("msg").innerText = "All fields are required";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.find(u => u.username === username);
    if (exists) {
        document.getElementById("msg").innerText = "User already exists";
        return;
    }

    users.push({ role, username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully");
    window.location.href = "index.html";
}
