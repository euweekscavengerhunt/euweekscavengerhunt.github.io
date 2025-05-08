const pattern = ['3', '4', '11', '18', '24', '29', '34', '33' , '26', '19', '13', '8']; // Secret pattern
    let currentInput = [];

    const tiles = document.querySelectorAll('.tile');
    const message = document.getElementById('successMessage');

    if (currentInput.length < pattern.length) {

    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        const id = tile.getAttribute('data-id');
        currentInput.push(id);
        tile.classList.add('active');

        // Check pattern
        for (let i = 0; i < currentInput.length; i++) {
          if (currentInput[i] !== pattern[i]) {
            resetTiles();
            return;
          }
        }

        // If complete and correct
        if (currentInput.length === pattern.length) {
          message.style.display = 'flex';
        }
      });
    });
    }
    function resetTiles() {
      currentInput = [];
      tiles.forEach(tile => tile.classList.remove('active'));
      message.style.display = 'none';
    }
