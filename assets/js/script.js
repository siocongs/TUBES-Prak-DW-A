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