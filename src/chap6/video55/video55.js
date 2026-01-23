console.log("video55");

const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");
const preV = document.getElementById("pre")
const preName = localStorage.getItem("Dung");
if (preName) {
    preV.innerHTML = `<B>${preName}</B>`;
}
btn.addEventListener("click", () => {
    localStorage.setItem("Dung", input.value);
    document.getElementById("message").innerHTML = `<B>${input.value}</B>`
})


