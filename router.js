window.currentPathIndex = 0;
window.highestPathIndexReached = 0;
window.cheating = 0;

const allPaths = [
  "startScreen",
  "questions/question1",
  "tasks/task1",
  "questions/question2",
  "tasks/task2",
  "questions/question3",
  "tasks/task3",
  "questions/question4",
  "tasks/task4",
  "questions/question5",
  "tasks/task5",
  "questions/question6",
  "tasks/task6",
  "questions/question7",
  "tasks/task7",
  "questions/question8",
  "tasks/task8",
  "endscreen"
];

function loadPage() {
  const hash = window.location.hash || "#startScreen";
  const page = hash.replace("#", "");
  const container = document.getElementById("app");

  const pathIndex = allPaths.indexOf(page);
  if (pathIndex !== -1) {
    if (pathIndex > window.highestPathIndexReached) {
      if ((pathIndex - highestPathIndexReached) >= 2) {
        cheating = 1;
        console.log("CHEATING DETECTED");
      }
      window.highestPathIndexReached = pathIndex;
    } else if (pathIndex < window.currentPathIndex) {
      location.hash = allPaths[window.currentPathIndex];
      return;
    }
    window.currentPathIndex = pathIndex;
  }

  // Remove previously added dynamic scripts
  document.querySelectorAll("script[data-dynamic-script]").forEach(script => {
    script.remove();
  });

  fetch(`HTML/${page}.html`)
    .then(response => {
      if (!response.ok) throw new Error("Page not found");
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;
      updatePageText();
      updateScoreDisplay();

      // Re-add and run new scripts
      const scripts = container.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        newScript.setAttribute("data-dynamic-script", "true");
        document.body.appendChild(newScript);
        oldScript.remove();
      });
    })
    .catch(err => {
      container.innerHTML = `<p>Error loading question.</p>`;
      console.error(err);
    });
}

window.updatePageText = function () {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translate(key);
  });
};

function updateScoreDisplay() {
  const el = document.getElementById("scoreDisplay");
  if (el) {
    el.textContent = `Score: ${Score.getScore()}`;
  }
}

window.addEventListener("hashchange", loadPage);
window.addEventListener("DOMContentLoaded", loadPage);
