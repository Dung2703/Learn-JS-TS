console.log("video56")

const user = document.getElementById("name");
const password = document.getElementById("pass");
const btn = document.getElementById("submitBtn");
const redirect = document.getElementById("success.html");

btn.addEventListener("click", () => {
    const userElement = user.value;
    const passwordElement = password.value;
    console.log(userElement, passwordElement);
    if (userElement !== "Dung" && passwordElement !== "12345") {
        alert("Login failed");
        user.style.borderColor = "red";
        password.style.borderColor = "red";
    } else {
        alert("Login successful");
        window.location.href = "success.html";
    }
})
