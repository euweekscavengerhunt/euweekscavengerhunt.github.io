document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("lang-toggle");

    function updateButtonLabel() {
        toggleBtn.textContent = currentLang === "en"
            ? translations["sv"].toggleLabel
            : translations["en"].toggleLabel;
    }

    function updatePageText() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.textContent = translate(key);
        });
    }

    // Initial render
    updatePageText();
    updateButtonLabel();

    toggleBtn.addEventListener("click", () => {
        const newLang = currentLang === "en" ? "sv" : "en";
        setLanguage(newLang);
    });

    document.addEventListener("languageChange", () => {
        updatePageText();
        updateButtonLabel();
    });
});
