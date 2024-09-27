// Function to show a section and hide the others
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Function to toggle the navigation menu
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('visible'); // Toggle the visibility class
}
