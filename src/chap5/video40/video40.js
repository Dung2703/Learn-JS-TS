console.log("video 40")

const score = [10, 20, 15, 25, 30];

// score.forEach((element, index) => {
//     console.log("index: ", index, " element: ", element);
// })

const scorex2 = score.map((element, index) => {
    return element * 2;
})

const scorex3 = score.map((element) => element * 3);

console.log("scorex3: ", scorex3);

console.log("scorex2: ", scorex2);
console.log("score: ", score);