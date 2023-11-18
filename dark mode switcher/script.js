const ThemeToggle = document.querySelector(".theme-toggle-button")
const sunMoonContaier = document.querySelector(".sun-moon-container")


ThemeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    const currentRotation = parseInt(getComputedStyle(sunMoonContaier).getPropertyValue("--rotation"))
    sunMoonContaier.style.setProperty("--rotation", currentRotation + 180)
})