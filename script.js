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
  if (navMenu.classList.contains('nav-hidden')) {
    navMenu.style.display = 'block'; // Show menu
    setTimeout(() => {
      navMenu.classList.remove('nav-hidden'); // Remove hidden class after showing
    }, 10); // Delay to allow CSS transition
  } else {
    navMenu.classList.add('nav-hidden'); // Hide menu
    setTimeout(() => {
      navMenu.style.display = 'none'; // Set display to none after hiding
    }, 300); // Delay to allow CSS transition
  }
}
