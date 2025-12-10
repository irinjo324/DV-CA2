let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' }) // Ref: https://getbootstrap.com/docs/5.3/components/scrollspy/

// Show alert after user clicks send form button
function messageSent() {
  document.getElementById("successEmail").style.display = "block";
  document.getElementById("message"). value = "";
  document.getElementById("email"). value = "";
  document.getElementById("name"). value = "";
}
