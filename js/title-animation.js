document.addEventListener("DOMContentLoaded", function() {
    const typedTitle = document.getElementById("hello_world");
    const text = "hello, world\\n"; // Text to type
    let index = 0;
    let typingSpeed = 500; // Slower typing speed (milliseconds)
    let deletingSpeed = 500; // Speed for deleting characters one by one

    // Add the 'typing' class initially
    typedTitle.classList.add("typing");

    function type() {
        if (index < text.length) {
            typedTitle.textContent += text.charAt(index); // Add the next character
            index++;
            setTimeout(type, typingSpeed); // Continue typing
        } else {
            // After typing is finished, wait 2 seconds, then start deleting characters one by one
            setTimeout(deleteText, 1500); // Wait before starting the deletion
        }
    }

    function deleteText() {
        if (index > text.length - 2) { // Start deleting from the last character (the \n sequence)
            typedTitle.textContent = typedTitle.textContent.slice(0, -1); // Remove one character at a time
            index--;
            setTimeout(deleteText, deletingSpeed); // Continue deleting
        } else {
            // Once deletion is finished, remove the 'typing' class
            setTimeout(() => {
                typedTitle.classList.remove("typing");
            }, 1000); // Delay before removing the class
        }
    }

    // Start typing
    setTimeout(type, 0);
});
