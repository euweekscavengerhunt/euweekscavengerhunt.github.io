(() => {
    let score = 0;
    let bonusQuestions = [];

    window.Score = {
      addPoint: () => {
        score++;
        console.log("Score increased:", score); // For debugging
      },
      getScore: () => score,
      reset: () => {
        score = 0;
        bonusQuestions = [];
      },
      addBonus: (code) => {
        if (typeof code === "string" && code.trim() !== "") {
          bonusQuestions.push(code);
          console.log("Bonus added:", code); // For debugging
        }
      },
      getBonuses: () => [...bonusQuestions] // Return a copy for safety
    };
  })();
