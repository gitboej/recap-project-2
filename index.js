console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  swapAnswer();
  answer.classList.toggle("card__answer--active");
});

function swapAnswer() {
  if (answerButton.innerHTML === "Hide answer") {
    answerButton.innerHTML = "Show answer";
  } else {
    answerButton.innerHTML = "Hide answer";
  }
}
