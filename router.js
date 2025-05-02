function loadPage() {
  const hash = window.location.hash || "#question1";
  const page = hash.replace("#", "");
  const container = document.getElementById("app");

  fetch(`questions/${page}.html`)
    .then(response => {
      if (!response.ok) throw new Error("Page not found");
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;

      // Find and re-execute script tags manually
      const scripts = container.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
        oldScript.remove(); // cleanup
      });
    })
    .catch(err => {
      container.innerHTML = `<p>Error loading question.</p>`;
      console.error(err);
    });
}


window.addEventListener("hashchange", loadPage);
window.addEventListener("DOMContentLoaded", loadPage);

