(() => {
    let answered = false;

    window.checkAnswer = function (answer, correctIndex, nextPath) {
      if (answered) return;
      answered = true;

      const feedback = document.getElementById("feedback");
      if (answer === correctIndex) {
        feedback.textContent = translate("correct");
        feedback.style.color = "green";
        setTimeout(() => (location.hash = nextPath), 1000);
      } else {
        feedback.textContent = translate("wrong");
        feedback.style.color = "red";
        setTimeout(() => (location.hash = nextPath), 1000);
      }
    };

    document.addEventListener("languageChange", () => {
      updatePageText();
    });

    document.addEventListener("DOMContentLoaded", () => {
      updatePageText();
    });
  })();
