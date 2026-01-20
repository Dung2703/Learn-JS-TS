console.log("Hello Video32");

const sum = (a, b, c) => {
    console.log("Hi");
    if (typeof a !== 'number') {
        console.log("Error");
        return 0;
    }
    console.log("Bye");
    return a + b + c;
}

console.log(sum("Dung", 2, 3));
