(() => {
    let answeredCheckAnswer = false;

    window.checkBAnswer = function (answer, bonusCode) {
      if (answeredCheckAnswer) return;
      answeredCheckAnswer = true;

      const feedback = document.getElementById("feedback2");
      if (answer === 0) {
        feedback.textContent = translate("bonusCode") + bonusCode;
        feedback.style.color = "blue";
        Score.addBonus(bonusCode);
      } else {
        feedback.textContent = translate("wrong");
        feedback.style.color = "red";
      }
    };
  })();
