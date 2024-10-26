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

    switch (e.srcElement.id) {
        case "oneButton":
            if(isEqualGlobal === true) 
                {
                    currentOperator = "";
                    document.querySelector("#operatorHeader").textContent = currentOperator;
                }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "1";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "twoButton":
            if(isEqualGlobal === true)   {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "2";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "threeButton":
            if(isEqualGlobal === true)   {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "3";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "fourButton":
            if(isEqualGlobal === true)   {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "4";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "fiveButton":
            if(isEqualGlobal === true)   {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "5";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "sixButton":
            if(isEqualGlobal === true)   {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "6";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "sevenButton":
            if(isEqualGlobal === true)   {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "7";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "eightButton":
            if(isEqualGlobal === true)   {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "8";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "nineButton":
            if(isEqualGlobal === true)   {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "9";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "zeroButton":
            if(isEqualGlobal === true)   {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "0";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;
        case "decimalButton":
            if(isEqualGlobal === true)   {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if (screenNumber.includes(".")) break;
            if(checkStringLength(screenNumber)) return;
            screenNumber += ".";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "ACButton":
            screenNumber = "";
            savedAnswer = 0;
            currentOperator = "";
            document.querySelector("#operatorHeader").textContent = currentOperator;
            document.querySelector("#displayHeader").textContent= screenNumber;
            break;

        case "negativeButton":
            if (screenNumber === "" & savedAnswer != 0) {
                savedAnswer = savedAnswer * -1;
                document.querySelector("#displayHeader").textContent = savedAnswer;
            }
            else if (screenNumber != "" & screenNumber.charAt(0) === "-") {
                screenNumber = screenNumber.slice(1);
                document.querySelector("#displayHeader").textContent = screenNumber;
            }
            else if (screenNumber != "" && screenNumber != ".") {
                screenNumber = "-" + screenNumber;
                document.querySelector("#displayHeader").textContent = screenNumber;
            }
            break;

        case "backButton":
            if(screenNumber === "") break;
            if(screenNumber.charAt(0) === "-" && screenNumber.length === 2) screenNumber = "";
            screenNumber = screenNumber.slice(0, -1);
            document.querySelector("#displayHeader").textContent= screenNumber;
            break;

        case "equalButton":
            if (currentOperator === "") {
                if (screenNumber === "") break;
                savedAnswer = parseFloat(screenNumber);
                screenNumber = "";
                document.querySelector("#displayHeader").textContent = screenNumber;
        
            }
            if (screenNumber === ".") {
                screenNumber = "";
                document.querySelector("#displayHeader").textContent = screenNumber;
                break;
            }
            isEqualGlobal = true;
            document.querySelector("#operatorHeader").textContent = "";
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
        document.querySelector("#displayHeader").textContent = screenNumber;

    }
    isEqualGlobal = false;
    operations(currentOperator, false);
    currentOperator = e.srcElement.id;
    if(currentOperator === "addButton")
    document.querySelector("#operatorHeader").textContent = '+';
    else if(currentOperator === "subtractButton")
    document.querySelector("#operatorHeader").textContent = '-';
    else if(currentOperator === "multiplyButton")
        document.querySelector("#operatorHeader").textContent = '*';
    else if(currentOperator === "divideButton")
        document.querySelector("#operatorHeader").textContent = '÷';
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
    document.querySelector("#displayHeader").textContent = savedAnswer;
}

//Specific function for Percentage

function convertToPerceantge() {
    if (screenNumber === "" && savedAnswer != 0) {
        savedAnswer = Math.round((savedAnswer / 100) * Math.pow(10,10)) / Math.pow(10,10);
        document.querySelector("#displayHeader").textContent = savedAnswer;
    }
    else if (screenNumber != "") {
        screenNumber = Math.round((parseFloat(screenNumber) / 100) * Math.pow(10,10)) / Math.pow(10,10);
        document.querySelector("#displayHeader").textContent = screenNumber;
    }
}

//keyboard listener for number button

document.addEventListener("keydown", keyPressed);

function keyPressed(e) {
  
    switch (e.key) {
        case "1":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            screenNumber += "1";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "2":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "2";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "3":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "3";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "4":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "4";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "5":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "5";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "6":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "6";
            document.querySelector("#displayHeader").textContent= screenNumber;
            break;

        case "7":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "7";
            document.querySelector("#displayHeader").textContent= screenNumber;
            break;

        case "8":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "8";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "9":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "9";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "0":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if(checkStringLength(screenNumber)) return;
            screenNumber += "0";
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;
        case ".":
            if(isEqualGlobal === true)  {
                currentOperator = "";
                document.querySelector("#operatorHeader").textContent = currentOperator;
            }
            if (screenNumber.includes(".")) break;
            if(checkStringLength(screenNumber)) return;
            if (screenNumber.length >= 15) {
                alert("This calculator only take 15 digits")
                return;
            }
            screenNumber += ".";
            document.querySelector("#displayHeader").textContent = screenNumber;

        case "Backspace":
            if(screenNumber === "") break;
            if(screenNumber.charAt(0) === "-" && screenNumber.length === 2) screenNumber = "";
            screenNumber = screenNumber.slice(0, -1);
            document.querySelector("#displayHeader").textContent = screenNumber;
            break;

        case "=":
        case "Enter":
            
            if (currentOperator === "") {
                if (screenNumber === "") break;
                savedAnswer = parseFloat(screenNumber);
                screenNumber = "";
                document.querySelector("#displayHeader").textContent = screenNumber;
        
            }
            if (screenNumber === ".") {
                screenNumber = "";
                ddocument.querySelector("#displayHeader").textContent = screenNumber;
                break;
            }
            isEqualGlobal = true;
            document.querySelector("#operatorHeader").textContent = "";
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
                document.querySelector("#displayHeader").textContent = screenNumber;

            }
            isEqualGlobal = false;
            operations(currentOperator, false);
            if (e.key === "+") 
                {currentOperator = "addButton";
                    document.querySelector("#operatorHeader").textContent = e.key;
                }
            else if (e.key === "-") 
                {currentOperator = "subtractButton";
                    document.querySelector("#operatorHeader").textContent = e.key;
                }
            else if (e.key === "/") 
                {currentOperator = "divideButton";
                    document.querySelector("#operatorHeader").textContent = "÷";
                }
            else if (e.key === "*") 
                {currentOperator = "multiplyButton";
                    document.querySelector("#operatorHeader").textContent = e.key;
                }
            
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