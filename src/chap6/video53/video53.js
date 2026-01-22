console.log("video53");

const mybtn = document.getElementById("dung");
const mytext = document.getElementById("mytext");
const myreset = document.getElementById("reset");

console.log(mybtn, mytext, myreset);

mybtn.addEventListener("click", () => {
    console.log("You clicked me");
    mytext.style.color = "red";
    mytext.style.backgroundColor = "green";
    mytext.classList.add("dung", "tran");
});

myreset.addEventListener("click", () => {
    console.log("You clicked reset");
    mytext.style.color = "black";
    mytext.style.backgroundColor = "unset";
    mytext.classList.remove("dung", "tran");
});