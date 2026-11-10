document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents any bubbling conflicts
            navMenu.classList.toggle('active');
        });

        // Optional: Close menu when clicking outside of it on mobile
        document.addEventListener('click', (e) => {
            if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});