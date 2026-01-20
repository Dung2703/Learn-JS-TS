console.log("video43");

const person = {
    name1: "Dung",
    age: 18,
    address: "Hanoi",
}
console.log("person:", person);
console.log("age:", person.age);
console.log("name:", person["name1"])

person.score = 10;
console.log("person after add score:", person);

delete person.address;
console.log("person after delete address:", person);