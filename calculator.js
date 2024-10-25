let screenNumber = "";
let savedAnswer = 0;
let currentOperator = "";
let isEqualGlobal = false;



//Initializes calculator. can be later used for keeping a CE buttion

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

function checkStringLength(numberString){
    if (numberString.length >= 15) {
        alert("This calculator only take 15 digits")
        return true;
    }

    else return false;
}

//Numberbuttions eventlistener functions

function eventListenerForNumberBtn(e) {
    e.srcElement.style.opacity = "0.7";
    setTimeout((e) => { numberButtonOpacityAnimation(e) }, 200);
    if(isEqualGlobal === true) currentOperator = "";

    switch (e.srcElement.id) {
        case "oneButton":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "1";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "twoButton":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "2";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "threeButton":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "3";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "fourButton":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "4";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "fiveButton":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "5";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "sixButton":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "6";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "sevenButton":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "7";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "eightButton":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "8";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "nineButton":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "9";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "zeroButton":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "0";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;
        case "decimalButton":
            if (screenNumber.includes(".")) break;
            if(checkStringLength(screenNumber)) return;
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
            else if (screenNumber != "" && screenNumber != ".") {
                screenNumber = "-" + screenNumber;
                document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            }
            break;

        case "backButton":
            screenNumber = screenNumber.slice(0, -1);
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "equalButton":
            if (currentOperator === "") {
                if (screenNumber === "") break;
                savedAnswer = parseFloat(screenNumber);
                screenNumber = "";
                document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
        
            }
            if (screenNumber === ".") {
                screenNumber = "";
                document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
                break;
            }
            isEqualGlobal = true;
            operations(currentOperator, true);
            break;

    }

}

//Operatorbuttons eventlistener functions

function eventListenerForOperatorBtn(e) {
    e.srcElement.style.opacity = "0.7";
    setTimeout((e) => { operatorButtonOpacityAnimation(e) }, 200);
    if (screenNumber === ".") return;
    if (e.srcElement.id === "percentageButton") {
        if (screenNumber === "" && savedAnswer === 0) return;
        convertToPerceantge();
        return;
    }
    if (currentOperator === "") {
        if (screenNumber === "") return;
        savedAnswer = parseFloat(screenNumber);
        screenNumber = "";
        document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;

    }
    isEqualGlobal = false;
    operations(currentOperator, false);
    currentOperator = e.srcElement.id;
}


//Actual operations are defined using switch-case

function operations(previousOperator, isEqual) {
    switch (previousOperator) {
        case "addButton":
            if (screenNumber === "") break;
            savedAnswer = Math.round((savedAnswer + parseFloat(screenNumber)) * (Math.pow(10,10))) /( Math.pow(10,10));
            screenNumber = "";
            if (!isEqual) currentOperator = "";

            break;
        case "subtractButton":
            if (screenNumber === "") break;
            savedAnswer = Math.round((savedAnswer - parseFloat(screenNumber)) * Math.pow(10,10)) / Math.pow(10,10);
            screenNumber = "";
            if (!isEqual) currentOperator = "";
   
            break;
        case "multiplyButton":
            if (screenNumber === "") break;
            savedAnswer = Math.round((savedAnswer * parseFloat(screenNumber)) * Math.pow(10,10)) / Math.pow(10,10);
            screenNumber = "";
            if (!isEqual) currentOperator = "";

            break;
        case "divideButton":
            if (screenNumber === "") break;
            if (parseFloat(screenNumber) === 0) {
                alert("can't divide by zero!")
                break;
            }
            savedAnswer = Math.round((savedAnswer / parseFloat(screenNumber)) * Math.pow(10,10)) / Math.pow(10,10);
            screenNumber = "";
            if (!isEqual) currentOperator = "";
            break;

    }
 document.querySelector(".displayDiv").firstElementChild.textContent = savedAnswer;
}

//Specific function for Percentage

function convertToPerceantge() {
    if (screenNumber === "" && savedAnswer != 0) {
        savedAnswer = Math.round((savedAnswer / 100) * Math.pow(10,10)) / Math.pow(10,10);
        document.querySelector(".displayDiv").firstElementChild.textContent = savedAnswer;
    }
    else if (screenNumber != "") {
        screenNumber = Math.round((parseFloat(screenNumber) / 100) * Math.pow(10,10)) / Math.pow(10,10);
        document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
    }
}

//keyboard listener for number button

document.addEventListener("keydown", keyPressed);

function keyPressed(e) {
  
    switch (e.key) {
        case "1":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "1";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "2":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "2";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "3":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "3";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "4":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "4";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "5":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "5";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "6":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "6";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "7":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "7";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "8":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "8";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "9":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "9";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "0":
            if(checkStringLength(screenNumber)) return;
            screenNumber += "0";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;
        case ".":
            if (screenNumber.includes(".")) break;
            if(checkStringLength(screenNumber)) return;
            if (screenNumber.length >= 15) {
                alert("This calculator only take 15 digits")
                return;
            }
            screenNumber += ".";
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;

        case "Backspace":
            screenNumber = screenNumber.slice(0, -1);
            document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
            break;

        case "=":
        case "Enter":
            if (currentOperator === "") {
                if (screenNumber === "") break;
                savedAnswer = parseFloat(screenNumber);
                screenNumber = "";
                document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
        
            }
            if (screenNumber === ".") {
                screenNumber = "";
                document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;
                break;
            }
            operations(currentOperator, true);
            break;
        case "+":
        case "-":
        case "/":
        case "*":
        case "%":
            if (screenNumber === ".") return;
            if (e.key === "%") {
                if (screenNumber === "" && savedAnswer === 0) return;
                convertToPerceantge();
                return;
            }
            if (currentOperator === "") {
                if (screenNumber === "") return;
                savedAnswer = parseFloat(screenNumber);
                screenNumber = "";
                document.querySelector(".displayDiv").firstElementChild.textContent = screenNumber;

            }
        
            operations(currentOperator, false);
            if (e.key === "+") currentOperator = "addButton";
            else if (e.key === "-") currentOperator = "subtractButton";
            else if (e.key === "/") currentOperator = "divideButton";
            else if (e.key === "*") currentOperator = "multiplyButton";
            break;
    }
}

initializeCalculator(); // Initializes Calculator


//Some CSS functions for animations

function operatorButtonOpacityAnimation(e) {
    let allOperatorButtonsOpacity = Array.from(document.querySelectorAll(".operatorButton"));
    allOperatorButtonsOpacity.map((item) => { item.style.opacity = 1 });
}

function numberButtonOpacityAnimation(e) {
    let allOperatorButtonsOpacity = Array.from(document.querySelectorAll(".numberButtons"));
    allOperatorButtonsOpacity.map((item) => { item.style.opacity = 1 });
}