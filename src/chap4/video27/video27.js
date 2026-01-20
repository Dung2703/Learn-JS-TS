console.log("Hello Video27");
//switch case
const score = 8;

switch (true) {
    case (score >= 9 && score <= 10):
        console.log("Grade A");
        break;
    case (score < 9 && score >= 8):
        console.log("Grade B");
        break;
    case (score < 8 && score >= 7):
        console.log("Grade C");
        break;
    default:
        console.log("Grade D");
}