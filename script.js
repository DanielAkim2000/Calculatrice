let numbers = document.querySelectorAll(".number");
let result = document.querySelector("#result");
let clear = document.querySelector("#clear");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let virgule = document.querySelector(".virgule");
let changesigne = document.querySelector("#changesigne");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        if (result.textContent == 0 && result.textContent.length == 1) {
            result.textContent = "";
        }
        if (result.textContent == "Math Error") {
            result.textContent = "";
        }
        result.textContent += event.target.textContent;
    });
});

clear.addEventListener("click", () => {
    result.textContent = 0;
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        switch (event.target.textContent) {
            case "+":
                result.textContent += "+";
                break;
            case "-":
                result.textContent += "-";
                break;
            case "X":
                result.textContent += "*";
                break;
            case "/":
                result.textContent += "/";
                break;
            case "%":
                result.textContent += "%";
                break;
            case "=":
                if (
                    result.textContent[result.textContent.length - 1] == "+" ||
                    result.textContent[result.textContent.length - 1] == "-" ||
                    result.textContent[result.textContent.length - 1] == "*" ||
                    result.textContent[result.textContent.length - 1] == "/" ||
                    result.textContent[result.textContent.length - 1] == "%"
                ) {
                    result.textContent = result.textContent.slice(0, -1);
                }
                result.textContent = eval(result.textContent);
                if (result.textContent == "Infinity") {
                    result.textContent = "Math Error";
                }
                break;
        }
    });
});

clear.addEventListener("click", () => {
    result.textContent = 0;
});

virgule.addEventListener("click", () => {
    result.textContent += ".";
});

changesigne.addEventListener("click", () => {
    if (result.textContent[0] == "-") {
        result.textContent = result.textContent.slice(1);
    } else {
        result.textContent = "-" + result.textContent;
    }
});
