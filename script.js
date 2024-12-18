document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const burgerDropdown = document.getElementById("burger-dropdown");

    burgerMenu.addEventListener("click", () => {
        burgerDropdown.classList.toggle("show");
    });

    // Optional: Close the dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!burgerMenu.contains(event.target) && !burgerDropdown.contains(event.target)) {
            burgerDropdown.classList.remove("show");
        }
    });
});
