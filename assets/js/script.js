const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
toggleTheme.addEventListener("click", ChangeTheme);


function ChangeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme == "dark") rootHtml.setAttribute("data-theme", "light")
    else rootHtml.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars")
}
