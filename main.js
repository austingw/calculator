let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNum = document.querySelector(".currentNum");
const previousDisplayNum = document.querySelector(".previousNum");

const operators = document.querySelectorAll(".operator");
const numButtons = document.querySelectorAll(".number");
const decimal = document.querySelector(".decimal");

const equal = document.querySelector(".equal");
equal.addEventListener("click", calculate);

const clear = document.querySelector(".allClear");
//clear.addEventListener("click", calculate);

numButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNum(e.target.textContent);
    });
});

function handleNum(number) {
   if (currentNum.length <= 12) {
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
    operator = ops;
    previousNum = currentNum;
    previousDisplayNum.textContent = previousNum + " " + operator;
    currentNum = "";
    currentDisplayNum.textContent = "";
 };

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
        previousNum = previousNum / currentNum
    }
    previousDisplayNum.textContent = "";
    currentDisplayNum.textContent = previousNum;
 };