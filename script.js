// ====================
// Motivational Messages
// ====================
const messages = [
  "Keep coding, you're doing great! ",
  "Every bug is a step to mastery ",
  "Today is a good day to code! ",
  "Small steps lead to big success "
];
document.getElementById("motivation").textContent =
  messages[Math.floor(Math.random() * messages.length)];

// ====================
// Dark/Light Mode
// ====================
const themeToggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// ====================
// Part 1: Basics
// ====================
const usernameInput = document.getElementById("username");
const charCount = document.getElementById("charCount");
usernameInput.addEventListener("input", () => {
  charCount.textContent = `${usernameInput.value.length} / 20`;
});

document.getElementById("greetBtn").addEventListener("click", () => {
  const greetOutput = document.getElementById("greetOutput");
  if (usernameInput.value.trim()) {
    greetOutput.textContent = `Hello, ${usernameInput.value}! 👋`;
    greetOutput.style.color = "green";
  } else {
    greetOutput.textContent = "Please enter your name.";
    greetOutput.style.color = "red";
  }
});

// ====================
// Part 2: Functions (Live Sum)
// ====================
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumOutput = document.getElementById("sumOutput");

const calculateSum = (a, b) => a + b;
const displaySum = () => {
  const total = calculateSum(
    parseFloat(num1.value) || 0,
    parseFloat(num2.value) || 0
  );
  sumOutput.textContent = `The sum is: ${total}`;
};

[num1, num2].forEach(input => input.addEventListener("input", displaySum));

// ====================
// Part 3: Loops (Animated Countdown)
// ====================
document.getElementById("countdownBtn").addEventListener("click", () => {
  const display = document.getElementById("countdownDisplay");
  let count = 5;
  display.textContent = count;

  const timer = setInterval(() => {
    count--;
    if (count > 0) {
      display.textContent = count;
    } else {
      display.textContent = "Done!!";
      clearInterval(timer);
    }
  }, 1000);
});

// ====================
// Part 4: DOM Manipulation
// ====================
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleText").classList.toggle("highlight");
});

const dynamicList = document.getElementById("dynamicList");
document.getElementById("addItemBtn").addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${dynamicList.children.length + 1}`;
  newItem.classList.add("fade-item");
  dynamicList.appendChild(newItem);
});
