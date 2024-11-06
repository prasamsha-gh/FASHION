// Function to toggle between light and dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    // Update the button text based on current mode
    const themeToggle = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '☀️ Light Mode';
    } else {
        themeToggle.innerHTML = '🌙 Dark Mode';
    }
}
