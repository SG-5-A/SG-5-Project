const quizButton = document.getElementById('quiz-button');
const quizContainer = document.getElementById('quiz-container');
const questionContainers = document.querySelectorAll('.question-container');
const questionCounter = document.getElementById('question-counter');

let currentQuestion = 0;
let correctAnswers = 0;

quizButton.addEventListener('click', () => {
    quizContainer.style.display = 'block';
    questionContainers[currentQuestion].classList.add('active');
    questionCounter.style.display = 'block';
    updateQuestionCounter();
    document.querySelectorAll('body > *:not(#quiz-container):not(nav):not(#question-counter):not(#retry-button)').forEach((element) => {
      element.style.display = 'none';
    });
  });

questionContainers.forEach((container) => {
  container.addEventListener('click', (event) => {
    if (event.target.classList.contains('answer')) {
      const answer = event.target;
      if (answer.getAttribute('data-correct') === 'true') {
        answer.classList.add('correct');
        correctAnswers++;
      } else {
        answer.classList.add('incorrect');
        container.querySelector('.answer[data-correct="true"]').classList.add('correct');
      }
      setTimeout(() => {
        questionContainers[currentQuestion].style.display = 'none';
        currentQuestion++;
        if (currentQuestion < questionContainers.length) {
          questionContainers[currentQuestion].style.display = 'block';
          updateQuestionCounter();
        } else {
          quizContainer.innerHTML = `<p>Visa valmis! Sait ${correctAnswers}/${questionContainers.length} kysymystä oikein. Hyvää työtä!</p>`;
          questionCounter.style.display = 'none';
        }
      }, 1000); // delay of 1 second before hiding the current question container
    }
  });
});

function updateQuestionCounter() {
  questionCounter.innerHTML = `Kysymyksiä jäljellä: ${questionContainers.length - currentQuestion}`;
}