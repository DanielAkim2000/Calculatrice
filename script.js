let numbers = document.querySelectorAll(".number");
let result = document.querySelector("#result");
let clear = document.querySelector("#clear");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let virgule = document.querySelector(".virgule");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        if (result.value == 0) {
            result.value = "";
        }
        if (result.value == "Math Error") {
            result.value = "";
        }
        result.value += event.target.textContent;
    });
});

clear.addEventListener("click", () => {
    result.value = 0;
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        switch (event.target.textContent) {
            case "+":
                result.value += "+";
                break;
            case "-":
                result.value += "-";
                break;
            case "X":
                result.value += "*";
                break;
            case "/":
                result.value += "/";
                break;
            case "=":
                result.value = eval(result.value);
                if (result.value == "Infinity") {
                    result.value = "Math Error";
                }
                break;
        }
    });
});

clear.addEventListener("click", () => {
    result.value = 0;
});

virgule.addEventListener("click", () => {
    result.value += ".";
});
