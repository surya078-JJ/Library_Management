function login() {
    let role = document.getElementById("role").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (role === "" || username === "" || password === "") {
        document.getElementById("msg").innerText = "All fields are required";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
        u => u.role === role && u.username === username && u.password === password
    );

    if (user) {
        alert("Login successful");

        if (role === "admin") {
            window.location.href = "admin-dashboard.html";
        } else {
            window.location.href = "student-dashboard.html";
        }
    } else {
        document.getElementById("msg").innerText = "Invalid credentials";
    }
}
