// ========================================
// DECodeArena AI - Main JavaScript
// ========================================

const signupForm = document.getElementById("signupForm");
const loginScreen = document.getElementById("loginScreen");


// ========================================
// CREATE ACCOUNT
// ========================================

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const dob = document.getElementById("userDOB").value;
    const email = document.getElementById("userEmail").value.trim();
    const password = document.getElementById("userPassword").value;

    if (!name || !dob || !email || !password) {
        document.getElementById("loginMessage").textContent =
            "Please fill in all fields.";

        return;
    }

    if (password.length < 6) {
        document.getElementById("loginMessage").textContent =
            "Password must contain at least 6 characters.";

        return;
    }


    // Save user's basic information
    localStorage.setItem("decodeArenaUserName", name);
    localStorage.setItem("decodeArenaUserEmail", email);
    localStorage.setItem("decodeArenaUserDOB", dob);

    // Hide login screen
    loginScreen.style.display = "none";

    // Update dashboard
    updateUserName(name);
});


// ========================================
// UPDATE USER NAME
// ========================================

function updateUserName(name) {

    // Find dashboard greeting
    const greeting = document.querySelector("h1");

    if (greeting) {

        const hour = new Date().getHours();

        let greetingText;

        if (hour < 12) {
            greetingText = "Good morning";
        }
        else if (hour < 18) {
            greetingText = "Good afternoon";
        }
        else {
            greetingText = "Good evening";
        }

        greeting.textContent = `${greetingText}, ${name} 👋`;
    }
}


// ========================================
// CHECK IF USER IS ALREADY LOGGED IN
// ========================================

window.addEventListener("DOMContentLoaded", function () {

    const savedName =
        localStorage.getItem("decodeArenaUserName");

    if (savedName) {

        loginScreen.style.display = "none";

        updateUserName(savedName);
    }
});


// ========================================
// QUICK MATCH BUTTON
// ========================================

const quickMatchButtons =
    document.querySelectorAll("button");

quickMatchButtons.forEach(function(button) {

    if (button.textContent.includes("Quick Match")) {

        button.addEventListener("click", function() {

            alert("⚔️ Searching for an opponent...");

        });

    }

});
document.getElementById("quickMatch")
    .addEventListener("click", function() {

        alert("Quick Match started!");

    });
