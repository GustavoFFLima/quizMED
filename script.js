const questions = [
    {
        question: "Qual é a capital da Argentina?",
        options: ["Buenos Aires", "Córdoba", "Rosário", "Mendoza"],
        answer: "Buenos Aires"
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    // Adicione mais perguntas aqui
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options.map(option => `
                <li><input type="radio" name="answer" value="${option}" /> ${option}</li>
            `).join('')}
        </ul>
    `;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer && selectedAnswer.value === questions[currentQuestionIndex].answer) {
        alert("Você acertou!");
    } else {
        alert("Você errou! A resposta correta é: " + questions[currentQuestionIndex].answer);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Fim do quiz!");
        // Aqui você pode adicionar reiniciar o quiz ou outras ações
    }
}

nextButton.addEventListener('click', nextQuestion);

// Carregar a primeira pergunta
loadQuestion();
