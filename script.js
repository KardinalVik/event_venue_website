// Site-Wide Scripting

// ----------
/* Make images clickable, 
    enlarge them and bring them in focus, 
    and allow for return to the page */

function initializeImageModal() {
    const images = document.querySelectorAll("img:not(.not_clickable)");
    const modal = document.getElementById("modal");
    const modal_image = document.getElementById("modal_content");

    images.forEach(img => {
        img.addEventListener("click", (e) => {
            modal.style.display = "block";
            modal_image.src = e.target.src;
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    });
}

document.addEventListener("DOMContentLoaded", initializeImageModal);
// ----------