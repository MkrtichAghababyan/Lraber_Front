
function Save() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordCheck = document.getElementById("passwordCheck").value;
    if (password == passwordCheck) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        location.href ='Login.html';
    }
}


function Check() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value
    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");
    if (email == savedEmail && password == savedPassword) {
        alert("You Pass");
        location.href ='mainPage.html';
    }
}