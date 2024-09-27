const sections = document.querySelectorAll('.main-section');
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('data-section');

        sections.forEach(section => {
            section.classList.remove('show');
        });

        document.getElementById(target).classList.add('show');

        // Remove active class from all links
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Add active class to the clicked link
        e.target.classList.add('active');
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hide all sections
        document.querySelectorAll('.main-section').forEach(section => {
            section.classList.remove('show');
        });

        // Show the selected section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('show');
    });
});


const sections = document.querySelectorAll('.main-section');
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('data-section');

        sections.forEach(section => {
            section.classList.remove('show');
        });

        document.getElementById(target).classList.add('show');

        // Remove active class from all links
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Add active class to the clicked link
        e.target.classList.add('active');
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hide all sections
        document.querySelectorAll('.main-section').forEach(section => {
            section.classList.remove('show');
        });

        // Show the selected section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('show');
    });
});


const sections = document.querySelectorAll('.main-section');
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('data-section');

        sections.forEach(section => {
            section.classList.remove('show');
        });

        document.getElementById(target).classList.add('show');

        // Remove active class from all links
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Add active class to the clicked link
        e.target.classList.add('active');
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hide all sections
        document.querySelectorAll('.main-section').forEach(section => {
            section.classList.remove('show');
        });

        // Show the selected section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('show');
    });
});

<script>
    const toggleButton = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggle the 'show' class
    });
</script>

