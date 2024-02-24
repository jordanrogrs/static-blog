// Selector
const themeToggleBtns = document.querySelectorAll('#theme-toggle');
const sunIcons = document.querySelectorAll('.sun-icon');
const moonIcons = document.querySelectorAll('.moon-icon');

// State
const theme = localStorage.getItem('theme');

// On mount
theme && document.body.classList.add(theme);

function toggleIcons() {
    moonIcons.forEach(icon => icon.classList.toggle('active'));
    sunIcons.forEach(icon => icon.classList.toggle('active'));
}

// Handlers
const handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        toggleIcons();
    } else {
        localStorage.removeItem('theme');
        // document.body.removeAttribute('class');
        toggleIcons();
    }
};

// Events 
themeToggleBtns.forEach(btn => 
    btn.addEventListener('click', handleThemeToggle)
);