const questions = [
  {
    question: `In "Dragon Ball Z," what is the name of Goku's signature attack?`,
    answers: [
      { text: "a) Kamehameha", correct: true },
      { text: "b) Rasengan", correct: false },
      { text: "c) Spirit Bomb", correct: false },
      { text: "d) Final Flash", correct: false },
    ],
  },
  {
    question: `In "One Piece," what is the name of the protagonist who dreams of becoming the Pirate King?`,
    answers: [
      { text: "a) Monkey D. Luffy", correct: true },
      { text: "b) Roronoa Zoro", correct: false },
      { text: "c) Natsu Dragneel", correct: false },
      { text: "d) Edward Elric", correct: false },
    ],
  },
  {
    question: `What is the name of the main character in "Attack on Titan" who vows to eradicate all Titans?`,
    answers: [
      { text: "a) Eren Yeager", correct: true },
      { text: "b) Levi Ackerman", correct: false },
      { text: "c) Mikasa Ackerman", correct: false },
      { text: "d) Armin Arlert", correct: false },
    ],
  },
  {
    question: `In "My Hero Academia," what is the name of the main character who inherits All Might's Quirk?`,
    answers: [
      { text: "a) Izuku Midoriya", correct: true },
      { text: "b) Katsuki Bakugo", correct: false },
      { text: "c) Shoto Todoroki", correct: false },
      { text: "d) Ochaco Uraraka", correct: false },
    ],
  },
  {
    question: `Who is the protagonist of "Death Note," a high school student who gains a notebook with deadly powers?`,
    answers: [
      { text: "a) Light Yagami", correct: true },
      { text: "b) L Lawliet", correct: false },
      { text: "c) Misa Amane", correct: false },
      { text: "d) Ryuk", correct: false },
    ],
  },
  {
    question: `In "Naruto," what is the name of Naruto's mentor who teaches him the Rasengan?`,
    answers: [
      { text: "a) Jiraiya", correct: true },
      { text: "b) Kakashi Hatake", correct: false },
      { text: "c) Orochimaru", correct: false },
      { text: "d) Tsunade", correct: false },
    ],
  },
  {
    question: `Who is the main character of "Fullmetal Alchemist," a young alchemist searching for the Philosopher's Stone?`,
    answers: [
      { text: "a) Edward Elric", correct: true },
      { text: "b) Alphonse Elric", correct: false },
      { text: "c) Roy Mustang", correct: false },
      { text: "d) Winry Rockbell", correct: false },
    ],
  },
  {
    question: `In "Bleach," what is the name of the protagonist who gains the powers of a Soul Reaper?`,
    answers: [
      { text: "a) Ichigo Kurosaki", correct: true },
      { text: "b) Rukia Kuchiki", correct: false },
      { text: "c) Renji Abarai", correct: false },
      { text: "d) Uryu Ishida", correct: false },
    ],
  },
  {
    question: `What is the name of the group of assassins led by Nagisa Shiota in "Assassination Classroom"?`,
    answers: [
      { text: "a) Class 3-E", correct: true },
      { text: "b) The Black Bulls", correct: false },
      { text: "c) The Phantom Troupe", correct: false },
      { text: "d) The Seven Deadly Sins", correct: false },
    ],
  },
  {
    question: `In "Tokyo Ghoul," what is the name of the protagonist who becomes a half-ghoul after a life-changing encounter?`,
    answers: [
      { text: "a) Ken Kaneki", correct: true },
      { text: "b) Touka Kirishima", correct: false },
      { text: "c) Hideyoshi Nagachika", correct: false },
      { text: "d) Rize Kamishiro", correct: false },
    ],
  },
];

// start codding
/*
const questionEl = document.getElementById("question");
const answersBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let currentScore = 0;

function startQuiz() {
  resetState();
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correst = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answersBtn.firstChild) {
    answersBtn.removeChild(answersBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";

  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  Array.from(answersBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  questionEl.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "play Again";
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", (e) => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
*/
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", (e) => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
