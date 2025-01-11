// script.js
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkUserInput = () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  }
};

const clearUserInput = () => {
    userInput.value = "";
    result.innerHTML = "";
};

checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", clearUserInput);