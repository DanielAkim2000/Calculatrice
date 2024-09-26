let numbers = document.querySelectorAll(".number");
let result = document.querySelector("#result");
let clear = document.querySelector("#clear");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let virgule = document.querySelector(".virgule");
let changesigne = document.querySelector("#changesigne");

class Calculatrice {
    constructor() {
        this.result = "0";
    }

    add(number) {
        if (this.result == 0 && this.result.length == 1) {
            this.result = "";
            this.actualiseResult();
        }
        if (this.result == "Math Error") {
            this.result = "";
            this.actualiseResult();
        }
        this.result += number;
        this.actualiseResult();
    }

    clear() {
        this.result = "0";
        this.actualiseResult();
    }

    addOperator(operator) {
        switch (operator) {
            case "+":
                this.result += "+";
                this.actualiseResult();
                break;
            case "-":
                this.result += "-";
                this.actualiseResult();
                break;
            case "X":
                this.result += "x";
                this.actualiseResult();
                break;
            case "÷":
                this.result += "÷";
                this.actualiseResult();
                break;
            case "%":
                this.result += "%";
                this.actualiseResult();
                break;
            case "=":
                if (
                    this.result[this.result.length - 1] == "+" ||
                    this.result[this.result.length - 1] == "-" ||
                    this.result[this.result.length - 1] == "*" ||
                    this.result[this.result.length - 1] == "÷" ||
                    this.result[this.result.length - 1] == "%"
                ) {
                    this.result = this.result.slice(0, -1);
                    this.actualiseResult();
                }
                if (this.result.includes("%")) {
                    let result = this.result.split("%");
                    let pourcentage = (
                        (result[0] * result[1]) /
                        100
                    ).toString();
                    this.result = pourcentage;
                    this.actualiseResult();
                }
                if (this.result.includes("x")) {
                    this.result = this.result.replace("x", "*");
                    this.actualiseResult();
                }
                if (this.result.includes("÷")) {
                    this.result = this.result.replace("÷", "/");
                    this.actualiseResult();
                }
                if (this.result.includes("--")) {
                    this.result = this.result.replace("--", "+");
                    this.actualiseResult();
                }
                if (this.result.includes("++")) {
                    this.result = this.result.replace("++", "+");
                    this.actualiseResult();
                }
                if (this.result.includes("+-")) {
                    this.result = this.result.replace("+-", "-");
                    this.actualiseResult();
                }
                if (this.result.includes("-+")) {
                    this.result = this.result.replace("-+", "-");
                    this.actualiseResult();
                }
                if (this.result.includes("Infinity")) {
                    this.result = "Math Error";
                    this.actualiseResult();
                }
                this.result = `${eval(this.result)}`;
                if (this.result.length > 12) {
                    this.result = this.result.slice(0, 12);
                }
                this.actualiseResult();
                if (this.result == "Infinity") {
                    this.result = "Math Error";
                    this.actualiseResult();
                }
                break;
        }
    }

    addVirgule() {
        this.result += ".";
        this.actualiseResult();
    }

    changeSigne() {
        if (this.result[0] == "-") {
            this.result = this.result.slice(1);
            this.actualiseResult();
        } else {
            this.result = "-" + this.result;
            this.actualiseResult();
        }
    }

    actualiseResult() {
        switch (this.result.length) {
            case 1:
                result.style.fontSize = "3rem";
                break;
            case 14:
                result.style.fontSize = "2rem";
                break;
            case 20:
                result.style.fontSize = "1.5rem";
                break;
            case 25:
                result.style.fontSize = "1rem";
                break;
            case 40:
                result.style.fontSize = "0.8rem";
                break;
        }

        if (this.result.length > 40) {
            result.style.fontSize = "3rem";
            this.result = "Math Error";
        }

        result.textContent = this.result;
    }
}

let calculatrice = new Calculatrice();

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        calculatrice.add(event.target.textContent);
    });
});

clear.addEventListener("click", () => {
    calculatrice.clear();
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        calculatrice.addOperator(event.target.textContent);
    });
});

virgule.addEventListener("click", () => {
    calculatrice.addVirgule();
});

changesigne.addEventListener("click", () => {
    calculatrice.changeSigne();
});

equal.addEventListener("click", () => {
    calculatrice.addOperator("=");
});
