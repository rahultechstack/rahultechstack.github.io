(function () {
  let wordList = [];
  let correctWord = "";
  let animationTimeout;

  const wordListInput = document.getElementById("word-list-input");
  const wordDisplay = document.getElementById("word-display");
  const userInputEl = document.getElementById("user-input");
  const setWordListBtn = document.getElementById("set-word-list");

  if (!wordListInput || !wordDisplay || !userInputEl || !setWordListBtn) return;

  function pickRandomWord() {
    correctWord = wordList[Math.floor(Math.random() * wordList.length)];
    wordDisplay.textContent = correctWord;
    wordDisplay.classList.remove("hidden");
    userInputEl.value = "";
  }

  function checkInput() {
    if (userInputEl.value.toLowerCase() === correctWord.toLowerCase()) {
      wordDisplay.classList.add("hidden");
      clearTimeout(animationTimeout);
      animationTimeout = setTimeout(pickRandomWord, 500);
    }
  }

  function parseWordList(text) {
    return text
      .split("\n")
      .map((word) => word.trim().replace(/^\d+\.\s*/, ""))
      .filter(Boolean);
  }

  function setWordList() {
    wordList = wordListInput.value.trim() === "" ? DEFAULT_WORD_LIST : parseWordList(wordListInput.value);
    pickRandomWord();
  }

  setWordListBtn.addEventListener("click", setWordList);
  userInputEl.addEventListener("input", checkInput);
  userInputEl.focus();
})();
