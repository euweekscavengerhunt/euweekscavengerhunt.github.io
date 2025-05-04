(() => {
    let score = 0;

    window.Score = {
      addPoint: () => {
        score++;
        console.log("Score increased:", score); // For debugging
      },
      getScore: () => score,
      reset: () => {
        score = 0;
      }
    };

    
  })();
