document.addEventListener("DOMContentLoaded", function () {
  // Toggle class active
  const navbarNav = document.querySelector(".navbar_nav"); // Periksa selector yang sesuai dengan HTML
  const hamburger = document.querySelector("#hamburger-menu");

  // Jika elemen ditemukan
  if (navbarNav && hamburger) {
    // Ketika hamburger menu diklik
    hamburger.onclick = () => {
      navbarNav.classList.toggle("active");
    };

    // Klik di luar sidebar untuk menghilangkan nav
    document.addEventListener("click", function (e) {
      // Jika klik di luar hamburger menu dan navbar, tutup menu
      if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
      }
    });
  } else {
    console.error("Elemen navbar_nav atau hamburger-menu tidak ditemukan.");
  }
});
