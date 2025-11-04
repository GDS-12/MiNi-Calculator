let expression = "";
let result;
let buttons = document.querySelectorAll("input[type='button']");
let display = document.querySelector(".display");
buttons.forEach(button => {

    button.addEventListener("click", () => {
        let value = button.value;
        if (value == "=") {
            try {
                result = eval(expression);
                display.innerHTML = "<div style='text-align:end'>" + result + "</div>";
                expression = "";
            } catch {
                display.innerHTML = "<div style='text-align:end'>Error</div>";
                expression = "";
            }
        }
        else if (value == "C") {
            display.innerHTML = "";
            expression = "";
        }
        else if (value == "⌫") {
            expression = expression.slice(0, -1);
            display.innerHTML = expression;
        }
        else {
            expression += value;
            display.innerHTML += value;
        }
    })
})