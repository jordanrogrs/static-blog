// Selector
const themeToggleBtns = document.querySelectorAll('#theme-toggle');
const sunIcons = document.querySelectorAll('.sun-icon');
const moonIcons = document.querySelectorAll('.moon-icon');

// State
const theme = localStorage.getItem('theme');
let colorGreen = '#86BBD8';
let colorWhite = '#ffffff';

// Update SVG colors function
function updateSvgColors() {
    const svgs = document.querySelectorAll('.contact__icon a');
    if (document.body.classList.contains('dark-mode')) {
        colorGreen = '#86BBD8';
        colorWhite = '#000000';
    }
    svgs.forEach(svg => {
        svg.querySelectorAll('path').forEach(path => {
            path.setAttribute('fill', colorGreen);
        });

        svg.addEventListener('mouseenter', () => {
            svg.querySelectorAll('path').forEach(path => {
                path.setAttribute('fill', colorWhite);
            });
        });

        svg.addEventListener('mouseleave', () => {
            svg.querySelectorAll('path').forEach(path => {
                path.setAttribute('fill', colorGreen);
            });
        });
    });
}

// On mount
theme && document.body.classList.add(theme);
updateSvgColors();

// Handlers
function toggleIcons() {
    moonIcons.forEach(icon => icon.classList.toggle('active'));
    sunIcons.forEach(icon => icon.classList.toggle('active'));
    updateSvgColors(); 
}

const handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    colorGreen = '#ffffff';
    colorWhite = '#000000';
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        toggleIcons();
    } else {
        localStorage.removeItem('theme');
        colorGreen = '#86BBD8';
        colorWhite = '#ffffff';
        toggleIcons();
    }
};

// Events 
themeToggleBtns.forEach(btn => 
    btn.addEventListener('click', handleThemeToggle)
);
