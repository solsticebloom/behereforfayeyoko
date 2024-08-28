document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready!');
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    menuToggle.classList.toggle('hidden'); // Toggle the hidden class
});

// Add a click event to close the menu if clicking outside of it
document.addEventListener('click', function(event) {
    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('show');
        menuToggle.classList.remove('hidden');
    }
});

