console.log("video52");

const mybtn = document.getElementById("dung");
const mytext = document.getElementById("mytext");

console.log(mybtn, mytext);

mybtn.addEventListener("click", () => {
    console.log("Button clicked!");
    mytext.innerHTML = "Dung";
})

const myreset = document.getElementById("reset");

myreset.addEventListener("click", () => {
    mytext.innerHTML = "video52";
})