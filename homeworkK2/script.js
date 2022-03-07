let answer = this.prompt("Write a number");
console.log(answer);

let answer3 = this.prompt("Write another number");
console.log(answer3);

let answer2 = this.prompt("Decide on an action! (*,/,+,-)");
console.log(answer2);

let result;
if (answer2 == "+") {
    result = Number(answer.replace(",", ".")) + Number(answer3.replace(",", "."));
} else if (answer2 == "-") {
    result = Number(answer.replace(",", ".")) - Number(answer3.replace(",", "."));
} else if (answer2 == "*") {
    result = Number(answer.replace(",", ".")) * Number(answer3.replace(",", "."));
} else if (answer2 == "/") {
    result = Number(answer.replace(",", ".")) / Number(answer3.replace(",", "."));
}

if (isNaN(result)) {
    this.alert("The operation is invalid, please repeat")
} else alert(answer + answer2 + answer3 + "=" + result);