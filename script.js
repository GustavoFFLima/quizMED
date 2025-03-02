function startQuiz() {
    currentQuestionIndex = 0;
    document.getElementById("quizContainer").classList.remove("hidden");
    document.getElementById("menu").classList.add("hidden");
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= filteredQuestions.length) {
        document.getElementById("quizContent").innerHTML = "<p>Quiz finalizado!</p>";
        document.getElementById("nextButton").innerText = "Voltar ao Menu";
        document.getElementById("nextButton").onclick = () => returnToMenu();
        return;
    }

    let question = filteredQuestions[currentQuestionIndex];
    let optionsHTML = question.answers.map((answer, index) => `
        <label>
            <input type="radio" name="answer" value="${index}"> ${answer}
        </label>
    `).join("<br>");

    document.getElementById("quizContent").innerHTML = `<h3>${question.question}</h3>${optionsHTML}<p id="feedback"></p>`;
    document.getElementById("nextButton").innerText = "Confirmar";
    document.getElementById("nextButton").onclick = checkAnswer;
}

function checkAnswer() {
    let selected = document.querySelector("input[name='answer']:checked");
    if (!selected) return alert("Selecione uma resposta!");

    let isCorrect = parseInt(selected.value) === filteredQuestions[currentQuestionIndex].correct;
    document.getElementById("feedback").innerText = isCorrect ? "✅ Resposta correta!" : "❌ Resposta errada!";
    
    document.getElementById("nextButton").innerText = "Seguinte";
    document.getElementById("nextButton").onclick = () => {
        currentQuestionIndex++;
        loadQuestion();
    };
}

function returnToMenu() {
    document.getElementById("quizContainer").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}
