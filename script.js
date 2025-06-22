// script.js
const questions = [
    {
      question: "What is the capital of India?",
      answers: [
        { text: "Mumbai", correct: false },
        { text: "Delhi", correct: true },
        { text: "Chennai", correct: false },
        { text: "Kolkata", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false }
      ]
    },
    {
      question: "Which language is used to style web pages?",
      answers: [
        { text: "HTML", correct: false },
        { text: "Python", correct: false },
        { text: "CSS", correct: true },
        { text: "Java", correct: false }
      ]
    },
    {
        question: "Which tag is used to insert an image in HTML?",
        answers: [
          { text: "<image>", correct: false },
          { text: "<img>", correct: true },
          { text: "<src>", correct: false },
          { text: "<pic>", correct: false }
        ]
      },
      {
        question: "Which one is a JavaScript framework?",
        answers: [
          { text: "Laravel", correct: false },
          { text: "React", correct: true },
          { text: "Django", correct: false },
          { text: "Flask", correct: false }
        ]
      },
      {
        question: "Which property is used in CSS to change text color?",
        answers: [
          { text: "text-color", correct: false },
          { text: "font-color", correct: false },
          { text: "color", correct: true },
          { text: "text-style", correct: false }
        ]
      },
      {
        question: "What does CPU stand for?",
        answers: [
          { text: "Central Processing Unit", correct: true },
          { text: "Central Programming Unit", correct: false },
          { text: "Computer Primary Unit", correct: false },
          { text: "Central Power Unit", correct: false }
        ]
      },
      {
        question: "What does CSS stand for?",
        answers: [
          { text: "Computer Style Sheets", correct: false },
          { text: "Cascading Style Sheets", correct: true },
          { text: "Creative Style Sheets", correct: false },
          { text: "Colorful Style Sheets", correct: false }
        ]
      },
      {
        question: "Which language is used to make web pages interactive?",
        answers: [
          { text: "HTML", correct: false },
          { text: "CSS", correct: false },
          { text: "JavaScript", correct: true },
          { text: "SQL", correct: false }
        ]
      }      
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("option");
      optionsElement.appendChild(button);
  
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
  
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (optionsElement.firstChild) {
      optionsElement.removeChild(optionsElement.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
  
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("wrong");
    }
  
    Array.from(optionsElement.children).forEach(button => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
  
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}! 🎉`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
  }
  
  startQuiz();
  