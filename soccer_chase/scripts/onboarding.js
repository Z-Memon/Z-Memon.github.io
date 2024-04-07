document.addEventListener("DOMContentLoaded", function() {
    // Initialize Flickity carousel
    var flkty = new Flickity('.main_content', {
        // Flickity options
        wrapAround: true, // Enable infinite scrolling
        pageDots: false // Hide page dots
    });

    // Get close button element
    var closeButton = document.querySelector(".close");

    // Event listener for clicks on the close button image
    closeButton.addEventListener("click", function() {
        // Navigate to trivia.html
        window.location.href = "trivia.html";
    });
});
