console.clear();

const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit"]');

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const questionInput = form.querySelector('[name="question"]');
  const answerInput = form.querySelector('[name="answer"]');
  const tagInput = form.querySelector('[name="tag"]');

  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;

  const listItem = document.createElement("li");
  listItem.classList.add("card-list__item");

  const article = document.createElement("article");
  article.classList.add("card");

  const h2 = document.createElement("h2");
  h2.classList.add("card__question");
  h2.textContent = question;

  const buttonAnswer = document.createElement("button");
  buttonAnswer.classList.add("card__button-answer");
  buttonAnswer.setAttribute("type", "button");
  buttonAnswer.setAttribute("data-js", "answer-button");
  buttonAnswer.textContent = "Show answer";

  const p = document.createElement("p");
  p.classList.add("card__answer");
  p.setAttribute("data-js", "answer");
  p.textContent = answer;

  const ul = document.createElement("ul");
  ul.classList.add("card__tag-list");

  const liTag = document.createElement("li");
  liTag.classList.add("card__tag-list-item");
  liTag.textContent = "#" + tag;

  const div = document.createElement("div");
  div.classList.add("card__button-bookmark");

  const buttonBookmark = document.createElement("button");
  buttonBookmark.classList.add("bookmark");
  buttonBookmark.setAttribute("aria-label", "bookmark");
  buttonBookmark.setAttribute("type", "button");
  buttonBookmark.setAttribute("data-js", "bookmark-button");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("bookmark__icon");
  svg.setAttribute("viewBox", "0 0 24 24");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );

  svg.append(path);
  buttonBookmark.append(svg);
  div.append(buttonBookmark);

  ul.append(liTag);

  article.append(h2);
  article.append(buttonAnswer);
  article.append(p);
  article.append(ul);
  article.append(div);

  const ulElement = document.querySelector("ul");
  listItem.append(article);
  ulElement.append(listItem);

  questionInput.value = "";
  answerInput.value = "";
  tagInput.value = "";
  questionInput.focus();
});

const question = document.querySelector('[data-js="question"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const maxLength = question.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

question.addEventListener("input", () => {
  updateAmountLeft(maxLength - question.value.length);
});
