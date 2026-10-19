const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
const isDarkMode = savedTheme === "dark";

document.body.classList.toggle("dark-mode", isDarkMode);

function updateThemeToggle(darkMode) {
    themeToggle.setAttribute("aria-pressed", String(darkMode));
    const modeName = darkMode ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Switch to ${modeName} mode`);
    themeToggle.setAttribute("title", `Switch to ${modeName} mode`);
    themeToggle.querySelector("i").className = `fas fa-${darkMode ? "sun" : "moon"}`;
    themeToggle.querySelector("span").textContent = `${darkMode ? "Light" : "Dark"} mode`;
}

updateThemeToggle(isDarkMode);

themeToggle.addEventListener("click", () => {
    const darkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    updateThemeToggle(darkMode);
});
