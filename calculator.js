let screenNumber = "";
let savedAnswer = 0;
let currentOperator = "";


function initializeCalculator() {
    let allNumberButtons = document.querySelector(".numberDiv");
    let children = allNumberButtons.querySelectorAll("*");
    children.forEach((e) => {
        e.addEventListener("click", eventListenerForNumberBtn);
    });

    let allOperatorButtons = document.querySelector(".operatorDiv");
    let childrenOperator = allOperatorButtons.querySelectorAll("*");
    childrenOperator.forEach((e) => {
        e.addEventListener("click", eventListenerForOperatorBtn);
    });

}

function eventListenerForNumberBtn(e) {

    switch (e.srcElement.id) {
        case "oneButton":
            screenNumber += "1";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "twoButton":
            screenNumber += "2";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "threeButton":
            screenNumber += "3";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "fourButton":
            screenNumber += "4";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "fiveButton":
            screenNumber += "5";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "sixButton":
            screenNumber += "6";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "sevenButton":
            screenNumber += "7";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "eightButton":
            screenNumber += "8";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "nineButton":
            screenNumber += "9";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "zeroButton":
            screenNumber += "0";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;
        case "decimalButton":
            if(screenNumber.includes("."))break;
            screenNumber += ".";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "ACButton":
            screenNumber = "";
            savedAnswer = 0;
            currentOperator = "";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "negativeButton":
            if (screenNumber === "" & savedAnswer != 0) {
                savedAnswer = savedAnswer * -1;
                document.querySelector(".displayDiv").firstElementChild.textContent = savedAnswer;
            }
            else if (screenNumber != "" & screenNumber.charAt(0) === "-") {
                screenNumber = screenNumber.slice(1);
                document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            }
            else if (screenNumber != "") {
                screenNumber = "-" + screenNumber;
                document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            }
            break;

        case "backButton":
            screenNumber = screenNumber.slice(0, -1);
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "equalButton":
            if(screenNumber === ".") 
                {
                    screenNumber = "";
                    document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
                    break;
                }
            operations(currentOperator, true);
            break;

    }

}

function eventListenerForOperatorBtn(e) {
    if(screenNumber === ".") return;
    if (e.srcElement.id === "percentageButton") {
        if(screenNumber === "" && savedAnswer === 0) return;
        convertToPerceantge();
        return;
    }
    if (currentOperator === "") {
        if(screenNumber === "") return;
        savedAnswer = parseFloat(screenNumber);
        screenNumber = "";
        document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;

    }
    operations(currentOperator, false);
    currentOperator = e.srcElement.id;
}

initializeCalculator();

function operations(previousOperator, isEqual) {
    switch (previousOperator) {
        case "addButton":
            if (screenNumber === "") break;
            savedAnswer = savedAnswer + parseFloat(screenNumber);
            screenNumber = "";
            if (!isEqual) currentOperator = "";
            break;
        case "subtractButton":
            if (screenNumber === "") break;
            savedAnswer = savedAnswer - parseFloat(screenNumber);
            screenNumber = "";
            if (!isEqual) currentOperator = "";
            break;
        case "multiplyButton":
            if (screenNumber === "") break;
            savedAnswer = savedAnswer * parseFloat(screenNumber);
            screenNumber = "";
            if (!isEqual) currentOperator = "";
            break;
        case "divideButton":
            if (screenNumber === "") break;
            if (parseFloat(screenNumber) === 0) {
                alert("can't divide by zero!")
                break;
            }
            savedAnswer = savedAnswer / parseFloat(screenNumber);
            screenNumber = "";
            if (!isEqual) currentOperator = "";
            break;

    }
    document.querySelector(".displayDiv").firstElementChild.textContent = savedAnswer;
}

function convertToPerceantge() {
    if (screenNumber === "" && savedAnswer != 0)
    {
        savedAnswer = savedAnswer / 100;
        document.querySelector(".displayDiv").firstElementChild.textContent = savedAnswer;
    }
    else if (screenNumber != "") {
        screenNumber = parseFloat(screenNumber) / 100;
        document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
    }
}