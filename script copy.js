document.addEventListener("DOMContentLoaded", function() {
    // Login Form Handling
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;
            const errorMsg = document.getElementById("login-error-msg");

            const storedUser = localStorage.getItem("username");
            const storedPass = localStorage.getItem("password");

            if (username === storedUser && password === storedPass) {
                alert("Login successful!");
                window.location.href = "quiz.html";
            } else {
                errorMsg.textContent = "Invalid username or password!";
            }
        });
    }

    // Registration Form Handling
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const username = document.getElementById("regUsername").value;
            const email = document.getElementById("regEmail").value;
            const password = document.getElementById("regPassword").value;
            const errorMsg = document.getElementById("register-error-msg");

            if (username && email && password) {
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                
                alert("Registration successful! You can now log in.");
                window.location.href = "login.html";
            } else {
                errorMsg.textContent = "Please fill in all fields.";
            }
        });
    }
});
