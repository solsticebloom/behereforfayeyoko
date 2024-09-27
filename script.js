// Toggle Menu Functionality
const toggleButton = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
});

// Section Navigation
const sections = document.querySelectorAll('.main-section');
const navLinksItems = document.querySelectorAll('nav ul li a');

navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('show');
        });

        // Get the target section ID from the link's href attribute
        const target = e.target.getAttribute('href').substring(1); // Remove the '#' from the ID

        // Show the selected section
        document.getElementById(target).classList.add('show');

        // Remove active class from all links
        navLinksItems.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Add active class to the clicked link
        e.target.classList.add('active');

        // Close the mobile menu after selection
        navLinks.classList.remove('show');
    });
});

// Optionally, show the home section by default
document.querySelector('#home').classList.add('show');
