const hints = document.querySelectorAll('#hint-puzzle-container > div');
let currentHintIndex = 0;

document.getElementById('reveal-btn').addEventListener('click', () => {
    if (currentHintIndex < hints.length) {
    hints[currentHintIndex].style.display = 'block';
    currentHintIndex++;
  }
  if (currentHintIndex === hints.length){
    document.getElementById('reveal-btn').style.display = 'none';
  }
});
