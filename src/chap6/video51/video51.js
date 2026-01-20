console.log("video51");

const element = document.getElementById("dung");

// element.addEventListener("click", function () {
//     console.log("You clicked me!");
// });

const handleClick = () => {
    console.log("You clicked me!");
}
element.addEventListener("click", handleClick);
console.log(element);