document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Show confirmation
  document.getElementById("confirmation").style.display = "block";

  // Clear form
  document.getElementById("contactForm").reset();
});