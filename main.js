let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNum = document.querySelector(".currentNum");
const previousDisplayNum = document.querySelector(".previousNum");

window.addEventListener("keydown", handleKeypress);

const operators = document.querySelectorAll(".operator");
const numButtons = document.querySelectorAll(".number");

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    addDecimal();
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (currentNum != "" && previousNum != "") {
        calculate();
    }
});

const clear = document.querySelector(".allClear");
clear.addEventListener("click", clearCalculator);

numButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNum(e.target.textContent);
    });
});

function handleNum(number) {
   if (previousNum !== "" && currentNum !== "" && operator === "") {
       previousNum = ""
       currentDisplayNum.textContent = currentNum;
   };
    if (currentNum.length <= 11) {
    currentNum += number;
   currentDisplayNum.textContent = currentNum;
    };
};

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperators(e.target.textContent);
    });
});

function handleOperators(ops) {
    if (previousNum === "") {
        previousNum = currentNum;
        operatorCheck(ops)
    } else if(currentNum === "") {
        operatorCheck(ops)
    } else {
        calculate();
        operator = ops;
        currentDisplayNum.textContent = "0";
        previousDisplayNum.textContent = previousNum + " " + operator;
    }
 };

function operatorCheck(text) {
    operator = text;
    previousDisplayNum.textContent = previousNum + " " + operator;
    currentDisplayNum.textContent = "0";
    currentNum = "";
}

 function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    if(operator === "+") {
        previousNum = previousNum + currentNum
    } else if(operator === "-") {
        previousNum = previousNum - currentNum
    } else if(operator === "*") {
        previousNum = previousNum * currentNum
    } else if(operator === "÷") {
        if(currentNum <= 0) {
            previousNum = "Error";
            resultDisplay();
            operator = "";
            return;
        }
        previousNum = previousNum / currentNum
    }
    previousNum = previousNum.toString();
    resultDisplay();
 };

 function resultDisplay() {
   
    if(previousNum.length <= 11) {
        currentDisplayNum.textContent = previousNum;
    } else {
        currentDisplayNum.textContent = previousNum.slice(0,11) + "...";
    }
    previousDisplayNum.textContent = "";
    operator = "";
    currentNum = "";
 };

 function clearCalculator() {
     currentNum = "";
     previousNum = "";
     operator = "";
     currentDisplayNum.textContent = "0";
     previousDisplayNum.textContent = "";
     };

 function addDecimal() {
     if(!currentNum.includes(".")){
         currentNum += ".";
         currentDisplayNum.textContent = currentNum;
     }
 }

 function handleKeypress(e) {
     e.preventDefault();
     if(e.key >= 0 && e.key <= 9) {
         handleNum(e.key);
     }
     if(e.key === "Enter" || e.key === "=" && currentNum != "" && previousNum != "") {
        calculate();
     }
     if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
         handleOperators(e.key)
     }
     if (e.key === ".") {
         addDecimal(e.key);
     }
     if (e.key === "Backspace") {
         clearCalculator();
     }
 }