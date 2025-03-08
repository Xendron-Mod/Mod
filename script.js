// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

// Check if dark mode was enabled before
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode
darkModeToggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
};
