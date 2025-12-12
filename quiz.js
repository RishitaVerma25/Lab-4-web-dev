

const quizQuestions = [
    { 
        question: "What is the capital of France?", 
        answer: ["paris"] 
    },
    { 
        question: "Which planet is known as the 'Red Planet'?", 
        answer: ["mars"] 
    },
    { 
        question: "What is 5 + 7?", 
        answer: ["12"] 
    },
    { 
        question: "Which programming language is commonly used for front-end web development?", 
        answer: ["javascript"] 
    },
    { 
        question: "What is the chemical symbol for Gold?", 
        answer: ["au"] 
    },
    { 
        question: "How many continents are there on Earth?", 
        answer: ["7"] 
    },
    { 
        question: "What does HTML stand for?", 
        answer: ["hypertext markup language", "hyper text markup language"] 
    },
    { 
        question: "What year did the Titanic sink?", 
        answer: ["1912"] 
    },
    { 
        question: "What is the largest ocean on Earth?", 
        answer: ["pacific", "pacific ocean"] 
    },
    { 
        question: "What is the result of 10 % 3 (modulo operator)?", 
        answer: ["1"]
    }
];

function runQuiz() {
    let score = 0; 
    const totalQuestions = quizQuestions.length;

    for (let i = 0; i < totalQuestions; i++) {
        const currentQuizItem = quizQuestions[i];

        const userAnswer = prompt(currentQuizItem.question);

        if (userAnswer === null) {
            alert("Quiz interrupted. Exiting game.");
            return;
        }

        
        const normalizedUserAnswer = userAnswer.toLowerCase().trim();
        
        
        const acceptedAnswers = currentQuizItem.answer;

       
        if (acceptedAnswers.includes(normalizedUserAnswer)) {
            alert("Correct!");
            score++;
        } else {
        
            alert(`Wrong! A correct answer was: ${acceptedAnswers[0]}`);
        }
    }

    alert(`Quiz Over! Your final score is ${score} out of ${totalQuestions}.`);
}

function startGame() {
    let playAgain = true;

    while (playAgain) {
        runQuiz();

        playAgain = confirm("Do you want to play the Prompt Quizzer again?");
    }

    alert("Thanks for playing! Goodbye.");
}

startGame();