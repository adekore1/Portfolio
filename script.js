function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    // Adds or removes the class "open" to/from the menu element.
    icon.classList.toggle("open");
    // adds or removes the class "open" to/from the icon element (the hamburger icon).

}