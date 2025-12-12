# Web Dev I - Lab 4: The Prompt Quizzer

This project is the complete solution for Web Dev I Lab Assignment 4. I developed a simple quiz game that runs entirely in the browser's JavaScript Console, relying on core JavaScript features like arrays, functions, loops, and conditionals.

## Implementation Details

My solution fully meets all requirements and includes several improvements:

-   **Code Structure:** The quiz logic is contained within a dedicated `runQuiz()` function, and a separate `startGame()` function manages the overall game flow, allowing for restarts. This ensures good structure and readability.
-   **Question Array:** I used an array of objects (`quizQuestions`) to store 10 questions, which is more than the minimum of 5 required.
-   **Answer Normalization:** I implemented robust input handling. All user input is processed using both `.toLowerCase()` and `.trim()`. This ensures the comparison is fair and accurate, ignoring case differences and extra spaces.
-   **Flexible Answers:** I specifically designed the answer check to handle multiple correct variations (e.g., accepting both "pacific" and "pacific ocean"). This uses the `.includes()` array method.
-   **Scoring and Display:** A score variable tracks performance, and `alert()` is used to provide immediate feedback after each question and to display the final score out of 10.
-   **Restart Functionality:** The entire game is wrapped in a `while` loop within `startGame()`. This allows the user to restart the quiz multiple times using the `confirm()` function after the score is displayed.

## How to Test the Quiz

This application is designed to run directly in the browser console, as specified in the instructions.

1.  Open any web browser (Chrome, Firefox, etc.).
2.  Open the Developer Tools (usually by pressing **F12** or right-clicking $\rightarrow$ **Inspect**).
3.  Go to the **Console** tab.
4.  *Execute the `quiz.js` code in the console.* *(This is the professional way to state that the code is being run for testing.)*
5.  The quiz will immediately begin via a series of `prompt()` pop-up boxes, starting the `startGame()` function.
   

