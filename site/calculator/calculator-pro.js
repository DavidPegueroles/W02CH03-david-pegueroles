/* eslint-disable no-use-before-define */
let answ;
let result = [];

function question() {
  let newNum;
  const numList = [];

  do {
    do {
      newNum = parseFloat(
        Window.prompt("Introduce a number. Cancel to exit."),
        10
      );
      numList.push(newNum);
    } while (!Number.isNaN(newNum));

    answ = Window.prompt(
      "Do you want to add more numbers?\nType 'y' or 'yes' if so. Cancel to exit."
    );
    if (answ === "y" || answ === "yes") {
      answ = "y";
    } else {
      answ = "n";
    }
  } while (answ !== "n");

  console.log(numList);
  calculatorPro(numList);
}

function calculatorPro(arr) {
  const newList = [];
  result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Number.isNaN(arr[i])) {
      newList.push(arr[i]);
    }
  }

  if (newList.length <= 1) {
    if (Number.isNaN(newList[0])) {
      result.push("Introduce a valid NUMBER.");
    } else {
      result.push(
        `The square root of ${newList[0]} is ${Math.sqrt(newList[0]).toFixed(
          3
        )}`
      );
    }
  } else {
    let sum = newList[0];
    let rest = newList[0];
    let multiplication = newList[0];
    let division = newList[0];

    for (let i = 1; i < newList.length; i++) {
      sum += newList[i];
      rest -= newList[i];
      multiplication *= newList[i];
      division /= newList[i];
    }

    result.push(`The result of the sum is ${sum.toFixed(3)}`);
    result.push(`The result of the rest is ${rest.toFixed(3)}`);
    result.push(
      `The result of the multiplication is ${multiplication.toFixed(3)}`
    );
    result.push(`The result of the divison is ${division.toFixed(3)}`);
  }
}

do {
  question();
  Window.alert(result.join(`\n`));

  answ = Window.prompt(
    "Do you wish to do another operation?\nType 'y' or 'yes' to continue. Cancel to exit."
  );
  if (answ === "y" || answ === "yes") {
    answ = "y";
  } else {
    answ = "n";
    Window.alert("Bye!");
  }
} while (answ !== "n");
