console.log("video41")

const arr = [5, 10, 15, 20, 25];

const arrx2 = arr.map((item, index) => {
    return item * 2;
})
console.log("arr:", arr);
console.log("arrx2:", arrx2);

// const arrFilter = arr.filter((item, index) => {
//     return item > 15;
// })

const arrFilter = arr.filter(item => item > 15);
console.log("arrFilter:", arrFilter);