let number_1 = this.prompt("Please write a number.");
while (isNaN(number_1)) {
    this.alert("You did not write a number.");
    number_1 = this.prompt("Please write a number")

}

let operation = this.prompt("Please write a operation.");

let number_2 = this.prompt("Please write a number.");
while (isNaN(number_2)) {
    this.alert("You did not write a number.");
    number_2 = this.prompt("Please write a number")

}

if (operation == "/") {
    result = number_1 / number_2;
}
else if (operation == "*") {
    result = number_1 * number_2;
}
else if (operation == "+") {
    result = parseInt(number_1) + parseInt(number_2);
}
else if (operation == "-") {
    result = parseInt(number_1) - parseInt(number_2);
}

else
     this.alert("Error - you did not write a valid operation.")
console.log(number_1, operation, number_2);

this.alert("The result is " + result);

