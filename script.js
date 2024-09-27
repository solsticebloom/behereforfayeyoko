function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
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
