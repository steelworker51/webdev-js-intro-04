"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input");
const submissionBtn = document.getElementById("submission-btn");

// create a mutable variable called age and do not assign it a value.
let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);

    if (isNaN(age)) {
        alert("Please enter a valid age.");
        return;
    }

    if (age < 18) {
        alert("You cannot vote and you cannot purchase alcohol.");
    } else if (age >= 18 && age <= 20) {
        alert("You can vote, but you cannot purchase alcohol.");
    } else {
        alert("You can vote and purchase alcohol.");
    }
}

submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});

function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "0", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

// Optional: Add the input validation listener
ageInputEl.addEventListener("keydown", validateInput);
