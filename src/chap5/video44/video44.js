console.log("video44");

const sv1 = {
    name: "Santiago",
    score: 9,
}

const sv2 = {
    name: "Maria",
    score: 10,
}

const sv3 = {
    name: "Pedro",
    score: 6,
}

const students = [sv1, sv2, sv3];
console.log("students:", students);

// students.forEach((item, index) => {
//     console.log("index:", index, "name:", item.name);
// })

// for (let key in sv2) {
//     console.log(key, sv2[key]);
// }

// for (let value of Object.values(sv3)) {
//     console.log(value);
// }

for (let [key, value] of Object.entries(sv1)) {
    console.log(key, value);
}