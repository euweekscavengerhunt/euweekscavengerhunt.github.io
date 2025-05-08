const imageElement = document.getElementById('puzzle-image');
const hintButton = document.getElementById('hint-btn');
const revealButton = document.getElementById('reveal-btn');
const locationDiv = document.getElementById('location');

const images = [
  'IMG/task2/img1.jpg',
  'IMG/task2/img2.jpg',
  'IMG/task2/img3.jpg',
  'IMG/task2/img4.jpg',
  'IMG/task2/img5.jpg',
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
