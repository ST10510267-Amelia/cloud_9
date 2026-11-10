// Mobile Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Hours Dropdown Toggle (for contact.html)
function toggleHours() {
    const panel = document.getElementById('hoursPanel');
    const arrow = document.getElementById('arrowIcon');
    if (panel && arrow) {
        panel.classList.toggle('open');
        arrow.classList.toggle('rotate');
    }
}