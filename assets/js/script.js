// NAVBAR SCROLL
const navbar = document.getElementById("mainNavbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Shadow saat scroll
  navbar.classList.toggle("scrolled", currentScroll > 10);

  // AUTO HIDE NAVBAR
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
// End NAVBAR SCROLL

// LOGIN SESION
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
      const authArea = document.querySelector(".d-flex.align-items-center.gap-3");
      if (authArea) {
          authArea.innerHTML = `
              <a href="store.html" class="text-dark text-decoration-none">
                  <i class="bi bi-geo-alt"></i> Find a store
              </a>
              <span class="fw-semibold">Hi, ${user.firstName}</span>
              <button class="btn btn-outline-dark rounded-pill px-3" onclick="logout()">Logout</button>
          `;
      }
  }
});

function logout() {
  localStorage.removeItem("currentUser");
  location.reload();
}