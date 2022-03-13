

const add = function(a, b) {
    console.log(Number(a)+Number(b))
	return Number(a)+Number(b)
};

const subtract = function(a, b) {
	return parseInt(a)-parseInt(b)
};

const multiply = function(a, b) {
    return parseInt(a)*parseInt(b);
}

const devide = function (a, b) {
    return parseInt(a)/parseInt(b)
}

function operate(operator, num1, num2){
    switch(operator){
        case "*":
        return multiply(num1, num2);
        
        case "/":
        return devide(num1, num2);
        
        case "+":
                console.log(num1, num2)

        return add(num1, num2);
        
        case "-":
        return subtract(num1, num2);
        
    }
}

const currentDisplay = document.querySelector(".current")
const previousDisplay = document.querySelector(".previous")
let displayValue = []
let number_1 = []
let number_2 = []
let operator = ""

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    displays(1)
})

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    displays(2)
});

const three = document.querySelector("#three");
three.addEventListener("click", () => {
    displays(3)
});

const four = document.querySelector("#four");
four.addEventListener("click", () => {
    displays(4)
});

const five = document.querySelector("#five");
five.addEventListener("click", () => {
    displays(5)
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
    displays(6)
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    displays(7)
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    displays(8)
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    displays(9)
});

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    displays(0)
});

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    previousDisplay.textContent += "+"
    operator = "+"  
})

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    previousDisplay.textContent += "-"
    operator = "-"  
})

const multi = document.querySelector("#multi");
multi.addEventListener("click", () => {
    previousDisplay.textContent += "*"
    operator = "*"  
})

const devided = document.querySelector("#devided");
devided.addEventListener("click", () => {
    previousDisplay.textContent += "/"
    operator = "/"  
})

const period = document.querySelector("#period").addEventListener("click", () => {
    displays(".")
});


const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    previousDisplay.textContent += "=";
    currentDisplay.textContent = `${operate(operator, number_1, number_2)}`
})


function displays(number) {
    if (operator === ""){
        currentDisplay.textContent = number;
        previousDisplay.textContent += number;
        number_1 += number;
    }else{ previousDisplay.textContent += number;
        currentDisplay.textContent = number;
        number_2 += number;}
};

const AC = document.querySelector("#AC");
AC.addEventListener("click", () => {
    clear()
})

function clear() {
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
    number_1 = [];
    number_2 = [];
    operator = "";
}