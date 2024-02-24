const lazyImgs = document.querySelectorAll('.lazy');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
});

lazyImgs.forEach(() => {
    observer.observe(img);
});