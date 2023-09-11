const allBtns = [...document.getElementsByClassName("btn")];

let strToDisplay = "";

const displaElm = document.querySelector(".display");
console.log(displaElm);

const operators = ["%", "/", "*", "+", "-"];

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = "";
      disply(strToDisplay);
      return;
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return disply(strToDisplay);
    }

    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }

    if (operators.includes(val)) {
      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    strToDisplay += val;
    disply(strToDisplay);
  });
});

const disply = (str) => {
  displaElm.innerText = str || "0.00";
};

const total = () => {
  const ttl = eval(strToDisplay);
  disply(ttl);
  strToDisplay = ttl.toString();
};
