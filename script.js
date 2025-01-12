// script.js
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const validPhoneNums = (num) => {
  const phoneNumRegExp = /^1?[\s-]?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;
  return phoneNumRegExp.test(num);
};

const clearUserInput = () => {
  userInput.value = "";
  result.textContent = "";
};

checkBtn.addEventListener("click", () => {
  const inputVal = userInput.value;
  const isValid = validPhoneNums(inputVal);
  if (inputVal === "") {
    alert("Please provide a phone number");
    return;
  }
  return isValid
    ? (result.textContent = `Valid US number: ${inputVal}`)
    : (result.textContent = `Invalid US number: ${inputVal}`);
});

clearBtn.addEventListener("click", clearUserInput);