'use strict';
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu");
    const menuNav = document.querySelector("nav ul");

    menuBtn.addEventListener("click", function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        menuNav.classList.toggle("active");
    });
});
