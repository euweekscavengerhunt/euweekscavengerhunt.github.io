(() => {
    const imageElement = document.getElementById('puzzle-image2');
    const hintButton = document.getElementById('hint-btn2');
    const revealButton = document.getElementById('reveal-btn2');
    const locationDiv = document.getElementById('location2');

    const images = [
      'IMG/task6/img1.jpg',
      'IMG/task6/img2.jpg',
      'IMG/task6/img3.jpg',
      'IMG/task6/img4.jpg',
    ];

    let currentImageI = 0;

    if (hintButton && imageElement && revealButton && locationDiv) {
      hintButton.addEventListener('click', () => {
        currentImageI++;
        if (currentImageI < images.length) {
          imageElement.src = images[currentImageI];
          if (currentImageI === images.length - 1) {
            hintButton.style.display = 'none';
            revealButton.style.display = 'inline-block';
          }
        }
      });

      revealButton.addEventListener('click', () => {
        imageElement.style.display = 'none';
        revealButton.style.display = 'none';
        locationDiv.style.display = 'block';
      });
    }

    window.checkWordAnswer = function () {
      const input = document.getElementById("answerInput2").value.trim().toLowerCase().substring(0, 5);
      const resultDiv = document.getElementById("result2");

      if (input === "pippi") {
        resultDiv.style.display = "block";
      } else {
        resultDiv.style.display = "none";
      }
    };
  })();
