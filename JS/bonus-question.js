(() => {
    let answeredCheckAnswer = false;

    window.checkBAnswer = function (answer) {
      if (answeredCheckAnswer) return;
      answeredCheckAnswer = true;

      const feedback = document.getElementById("feedback2");
      if (answer === 0) {
        feedback.textContent = translate("bonusCode") + "EU1SAWES0M3";
        feedback.style.color = "blue";
      } else {
        feedback.textContent = translate("wrong");
        feedback.style.color = "red";
      }
    };
  })();
