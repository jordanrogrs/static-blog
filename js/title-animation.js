document.addEventListener("DOMContentLoaded", function() {
    const typedTitle = document.getElementById("hero__title");
    const texts = ["Jordan Rogers.", "Web Developer."];
    let index = 0;
    let textIndex = 0;
    let typingSpeed = 300; // Initial typing speed (milliseconds)
    let reverse = false; // Flag to indicate if the animation is in reverse mode

    function type() {
        const text = texts[textIndex];
        if (!reverse && index < text.length) {
            typedTitle.textContent += text.charAt(index);
            index++;
        } else if (!reverse && index === text.length) {
            setTimeout(() => {
                reverse = true; // Switch to reverse mode after the delay
            }, 3000); // Stall for 3.5 seconds before reversing
        } else if (reverse && index > 0) {
            typedTitle.textContent = text.substring(0, index); // Remove last character
            index--;
        } else {
            reverse = false; // Switch back to normal mode once typing in reverse completes
            typedTitle.textContent = ''; // Clear the typed text
            index = 0; // Reset the index
            textIndex = (textIndex + 1) % texts.length; // Move to the next text in the array
            setTimeout(type, 1000); // Start typing again after a delay
            return;
        }
        setTimeout(type, typingSpeed);
    }

    // Initial start of typing animation
    setTimeout(type, 0);
});