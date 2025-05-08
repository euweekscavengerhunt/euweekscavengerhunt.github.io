const imageElement = document.getElementById('puzzle-image');
const hintButton = document.getElementById('hint-btn');
const revealButton = document.getElementById('reveal-btn');
const locationDiv = document.getElementById('location');

const images = [
  'IMG/task6/img1.jpg',
  'IMG/task6/img2.jpg',
  'IMG/task6/img3.jpg',
  'IMG/task6/img4.jpg',
];

let currentImageIndex = 0;

hintButton.addEventListener('click', () => {
  currentImageIndex++;
  if (currentImageIndex < images.length) {
    imageElement.src = images[currentImageIndex];
    if (currentImageIndex === images.length - 1) {
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

  function checkWordAnswer() {
    const input = document.getElementById("answerInput").value.trim().toLowerCase().substring(0, 5);
    const resultDiv = document.getElementById("result");

    if (input === "pippi") {
      resultDiv.style.display = "block";
    } else {
      resultDiv.style.display = "none";
    }
  }
