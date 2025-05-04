(() => {
    window.checkAnswer = function (nextPath) {
      const feedback = document.getElementById("feedback");
        feedback.textContent = translate("completion");
        feedback.style.color = "green";
        setTimeout(() => (location.hash = nextPath), 1000);
      }
      document.addEventListener("languageChange", () => {
        updatePageText();
      });

      document.addEventListener("DOMContentLoaded", () => {
        updatePageText();
      });
  })();
