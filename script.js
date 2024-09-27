function toggleMenu() {
  const menu = document.getElementById('menu');
  const toggleButton = document.querySelector('.menu-toggle');

  menu.classList.toggle('visible');
  toggleButton.classList.toggle('active'); // Toggle active class

  // Change toggle button text based on menu state
  if (menu.classList.contains('visible')) {
    toggleButton.innerHTML = '✖'; // Change to 'X' when menu is open
  } else {
    toggleButton.innerHTML = '☰'; // Change back to hamburger icon when closed
  }
}


function showSection(section) {
  // Hide all sections
  document.getElementById("home").classList.add("hidden");
  document.getElementById("about").classList.add("hidden");
  document.getElementById("events").classList.add("hidden");
  document.getElementById("contact").classList.add("hidden");

  // Show the selected section
  document.getElementById(section).classList.remove("hidden");

  // Close the menu after selecting a section
  toggleMenu();
}

// Ensure the home section is displayed by default
window.onload = function() {
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("about").classList.add("hidden");
  document.getElementById("events").classList.add("hidden");
  document.getElementById("contact").classList.add("hidden");
};
