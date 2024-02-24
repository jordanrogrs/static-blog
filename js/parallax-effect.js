const docStyle = document.documentElement.style;
const aElem = document.querySelector('.parallax-effect'); // Set query
let boundingClientRect = aElem.getBoundingClientRect();

aElem.addEventListener('mousemove', function(e) {
    const x = e.clientX - boundingClientRect.left;
    const y = e.clientY - boundingClientRect.top;

    const xc = boundingClientRect.width / 2;
    const yc = boundingClientRect.height / 2;

    const dx = x - xc;
    const dy = y - yc;

    docStyle.setProperty('--ty', `${dy / 10}px`); // Change --ty instead of --rx
    docStyle.setProperty('--rx', `${dx / -10}deg`); // Change --rx instead of --ry
});

aElem.addEventListener('mouseleave', function() {
    docStyle.setProperty('--ty', '0');
    docStyle.setProperty('--rx', '0');
});

aElem.addEventListener('mousedown', function() {
    docStyle.setProperty('--tz', '-25px');
});

document.body.addEventListener('mouseup', function() {
    docStyle.setProperty('--tz', '-12px');
});
