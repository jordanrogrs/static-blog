document.addEventListener("DOMContentLoaded", function() {
    const typedTitle = document.getElementById("hero__title");
    const title = "Jordan Rogers."; // Hero Text
    let index = 0;
    let typingSpeed = 300; // Initial typing speed (milliseconds)
    let reverse = false; // Flag to indicate if the animation is in reverse mode

    function type() {
        if (!reverse && index < title.length) {
            typedTitle.textContent += title.charAt(index);
            index++;
        } else if (!reverse && index === title.length) {
            setTimeout(() => {
                reverse = true; // Switch to reverse mode after the delay
            }, 3000); // Stall for 3 seconds before reversing
        } else if (reverse && index > 0) {
            typedTitle.textContent = title.substring(0, index - 1); // Remove last character
            index--;
        } else {
            reverse = false; // Switch back to normal mode once typing in reverse completes
            typedTitle.textContent = ''; // Clear the typed text
            index = 0; // Reset the index
            setTimeout(type, 1000); // Start typing again after a delay
            return;
        }
        setTimeout(type, typingSpeed);
    }

    // Initial start of typing animation
    setTimeout(type, 0);
});