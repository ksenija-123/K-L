// let opeartion

// $("h1").html();

// $("1").click(function() {
//     alert("Hi! I'm an alert");
// });

// $("#boxed").css("background-color", "green");

// let number = 
let btnnr = 0;
let number1;
let operator;
let btnoperator;
let number2;
let answer;

function show(btnnr) {
    if (number1 === undefined) {
        number1 = btnnr;
        document.getElementById("boxed").innerHTML = number1;
    } else if (operator === undefined) {
        number1 = number1.toString() + btnnr.toString();
        document.getElementById("boxed").innerHTML = number1;
    } else if (number2 === undefined) {
        number2 = btnnr;
        document.getElementById("boxed").innerHTML = number2;
    } else {
        number2 = number2.toString() + btnnr.toString();
        document.getElementById("boxed").innerHTML = number2;
    }
};

function operation(btnoperator) {
    if (number1 === undefined) {} else {
        operator = btnoperator
    }
}

function result() {
    switch (operator) {
        case "+":
            answer = parseFloat(number1) + parseFloat(number2);
            break;
        case "-":
            answer = parseFloat(number1) - parseFloat(number2);
            break;
        case "/":
            answer = parseFloat(number1) / parseFloat(number2);
            break;
        case "*":
            answer = parseFloat(number1) * parseFloat(number2);
            break;
    }
    document.getElementById("boxed").innerHTML = answer;
}

function clearall() {
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    document.getElementById("boxed").innerHTML = 0;
}

function clear() {
    number1 = number1.slice(0, -1);
    document.getElementById("boxed").innerHTML = number1;
}