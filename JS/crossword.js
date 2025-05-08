let currentImage = 'en';

function toggleImage() {
  const imgElement = document.getElementById('toggleImage');
  if (currentImage === 'en') {
    imgElement.src = '/IMG/task3/sv.jpg';
    currentImage = 'sv';
  } else {
    imgElement.src = '/IMG/task3/en.jpg';
    currentImage = 'en';
  }
}

function checkCrossWordAnswer() {
    const input = document.getElementById("answerInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");

    if (input === "rådhusparken") {
      resultDiv.style.display = "block";
    } else {
      resultDiv.style.display = "none";
    }
  }
