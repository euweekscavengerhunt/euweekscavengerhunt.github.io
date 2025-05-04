(() => {
    let answered = false;

    window.checkAnswer = function (answer, correctIndex, nextPath) {
      if (answered) return;
      answered = true;

      const feedback = document.getElementById("feedback");
      const isCorrect = answer === correctIndex;
      feedback.textContent = isCorrect ? translate("correct") : translate("wrong");
      feedback.style.color = isCorrect ? "green" : "red";

      setTimeout(() => {
        location.hash = nextPath;
      }, 1000);
    };

    document.addEventListener("languageChange", () => {
      updatePageText();
    });

    document.addEventListener("DOMContentLoaded", () => {
      updatePageText();
    });
  })();
