const scoreCount = document.getElementById("scoreCount");
scoreCount.textContent = Score.getScore();

const bonusList = document.getElementById("bonusList");
const bonuses = Score.getBonuses();
bonuses.forEach(code => {
    const li = document.createElement("li");
    li.textContent = code;
    bonusList.appendChild(li);
});


const verification = document.getElementById("verification");
if (window.cheating == 0) {
    verification.style.display = "block";
}
