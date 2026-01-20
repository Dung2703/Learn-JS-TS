console.log("Hello Video33");

let globalVar = "I am a global variable";

function show() {
    console.log(globalVar);
}

show();

function hide() {
    let name1 = "Dung";
    console.log(name1);

    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y);
    }
    console.log(x); // This will cause an error because 'x' is not defined outside the if block
}

hide();
console.log(name1); // This will cause an error because 'name1' is not defined globally