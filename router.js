// Global progress tracker (starts at 0 = question1)
window.currentQuestionIndex = 0;

// Define the ordered question paths
const questionPaths = [
  "questions/question1",
  "questions/question2",
  "questions/question3",
  "questions/question4",
  "questions/question5",
  "questions/question6",
  "questions/question7",
  "questions/question8"
];

function loadPage() {
    const hash = window.location.hash || "#questions/question1";
    const page = hash.replace("#", "");
    const container = document.getElementById("app");

    const questionIndex = questionPaths.indexOf(page);
    if (questionIndex !== -1) {
      if (questionIndex > window.currentQuestionIndex) {
        // Progressing forward, update tracker
        window.currentQuestionIndex = questionIndex;
      } else if (questionIndex < window.currentQuestionIndex) {
        // Trying to go backward – block and redirect to current question
        location.hash = questionPaths[window.currentQuestionIndex];
        return;
      }
    }

    fetch(`HTML/${page}.html`)
      .then(response => {
        if (!response.ok) throw new Error("Page not found");
        return response.text();
      })
      .then(html => {
        container.innerHTML = html;
        updatePageText();

        // Dynamically reload script tags
        const scripts = container.querySelectorAll("script");
        scripts.forEach(oldScript => {
          const newScript = document.createElement("script");
          if (oldScript.src) {
            newScript.src = oldScript.src;
          } else {
            newScript.textContent = oldScript.textContent;
          }
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

  window.addEventListener("hashchange", loadPage);
  window.addEventListener("DOMContentLoaded", loadPage);
