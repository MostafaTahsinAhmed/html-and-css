const form = document.querySelector("form");
const output = document.getElementById("output");

const nameInput = document.getElementById("name");
let nameValue = nameInput.value;

const emailInput = document.getElementById("email");
let emailValue = emailInput.value;

const messageInput = document.getElementById("message");
let messageValue = messageInput.value;

const div = document.getElementById("myDiv");

let name = "";
nameInput.addEventListener("input", function (e) {
    output1.textContent = `${e.target.value}`;
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    nameValue = nameInput.value;
    emailValue = emailInput.value;
    messageValue = messageInput.value;

    // Update the output element with the input value
    output.textContent = `Hello, ${nameValue}!  Your Email is :  ${emailValue} ....  Your Message is :  ${messageValue}`;
    if (nameValue.length < 3) {
        alert("Name is too small !  ");
    } else if (nameValue.length > 2 && nameValue.length < 7) {
        alert("Please give name greater than 7th length !  ");
    } else {
        div.style.display = "block";
        div.style.width = "300px";
    }
});

clearBtn.addEventListener("click", function () {
    output1.textContent = "";
    messageInput.value = "";
    emailInput.value = "";
    nameInput.value = "";
    div.style.display = "none";
});

// Select the element and button elements
const overallDiv = document.getElementById("overall");
const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const yellowButton = document.getElementById("yellow");

redButton.addEventListener("click", function () {
    overallDiv.style.backgroundColor = "teal";
});

blueButton.addEventListener("click", function () {
    overallDiv.style.backgroundColor = "#01263f";
});

yellowButton.addEventListener("click", function () {
    overallDiv.style.backgroundColor = "darkolivegreen";
});
