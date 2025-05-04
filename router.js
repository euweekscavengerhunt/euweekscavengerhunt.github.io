function loadPage() {
    const hash = window.location.hash || "#questions/question1";
    const page = hash.replace("#", "");
    const container = document.getElementById("app");

    fetch(`HTML/${page}.html`)
      .then(response => {
        if (!response.ok) throw new Error("Page not found");
        return response.text();
      })
      .then(html => {
        container.innerHTML = html;
        updatePageText();
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

  window.updatePageText = function() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translate(key);
    });
  };


window.addEventListener("hashchange", loadPage);
window.addEventListener("DOMContentLoaded", loadPage);
