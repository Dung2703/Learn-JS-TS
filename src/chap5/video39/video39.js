console.log("Hello Video39");

const myClass = ["Alice", "Bob", "Charlie", "David"];

// console.log(myClass, myClass.length);

// for (let i = 0; i < myClass.length; i++) {
//     console.log(`Student ${i}: ${myClass[i]}`);
// }

myClass.forEach(function (value, index) {
    console.log("value: ", value, "index: ", index);
})
console.log("-----");
myClass.forEach((value, index) => {
    console.log("value: ", value, "index: ", index);
})