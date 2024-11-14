// Site-Wide Scripting

// ----------
/* Make images clickable, 
    enlarge them and bring them in focus, 
    and allow for return to the page */

function initializeImageModal() {
    const images = document.querySelectorAll("img:not(.not_clickable)"); // Find all clickable images on page
    const modal = document.getElementById("modal"); // Find the dormant modal
    const modal_image = document.getElementById("modal_content"); // Find the img tag in the modal

    images.forEach(img => { // Creates an event listener on every clickable image previously found
        img.addEventListener("click", (e) => { // When an image is clicked...
            modal.style.display = "block"; // Make modal visible
            modal_image.src = e.target.src; // Set the img in the modal to the same image as was clicked on
            document.body.style.overflow = "hidden"; // Make page not scrollable
        });
    });

    modal.addEventListener("click", () => { // Creates an event listener on the modal
        modal.style.display = "none"; // When clicked, make modal non-visible again
        document.body.style.overflow = "auto"; // Restore scrolling
    });
}

document.addEventListener("DOMContentLoaded", initializeImageModal); // Calls above function when page is loaded
// ----------