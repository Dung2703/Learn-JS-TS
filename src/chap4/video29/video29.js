console.log("Hello Video26");

for (let i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
    if (i === 5) {
        break;
    }
}

for (let j = 0; j < 10; j++) {
    if (j === 5) {
        continue;
    }
    console.log(`j = ${j}`);
}