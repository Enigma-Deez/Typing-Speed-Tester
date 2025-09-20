// script.js

// Some sample texts (you can expand this list)
const texts = [
  "The quick brown fox jumps over the lazy dog",
  "Typing speed tests measure how fast you can type",
  "Practice makes perfect, keep improving daily",
  "Javascript is fun once you understand the basics"
];

let startTime, endTime;
let isStarted = false;
let currentText = "";

// Select elements
const textEl = document.getElementById("text");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");

// Pick random text
function startTest() {
  currentText = texts[Math.floor(Math.random() * texts.length)];
  textEl.textContent = currentText;
  inputEl.value = "";
  inputEl.disabled = false;
  resultEl.textContent = "";
  isStarted = false;
}

// Track typing
inputEl.addEventListener("input", () => {
  if (!isStarted) {
    startTime = new Date();
    isStarted = true;
  }

  if (inputEl.value === currentText) {
    endTest();
  }
});

// End test
function endTest() {
  endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000; // in seconds
  const totalWords = currentText.split(" ").length;
  const wpm = Math.round((totalWords / timeTaken) * 60);

  // Accuracy calculation
  let correctChars = 0;
  const inputText = inputEl.value;
  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i] === currentText[i]) {
      correctChars++;
    }
  }
  const accuracy = Math.round((correctChars / currentText.length) * 100);

  resultEl.textContent = `✅ WPM: ${wpm} | 🎯 Accuracy: ${accuracy}% | ⏱ Time: ${timeTaken.toFixed(1)}s`;
  inputEl.disabled = true;
}
