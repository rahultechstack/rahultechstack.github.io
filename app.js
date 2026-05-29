(function () {
  const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
  const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
  const header = document.querySelector(".header.container");

  if (!hamburger || !mobileMenu || !header) return;

  const closeMenu = () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  };

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  document.addEventListener(
    "scroll",
    () => {
      header.style.backgroundColor = window.scrollY > 250 ? "#29323c" : "transparent";
    },
    { passive: true }
  );

  document.querySelectorAll(".header .nav-bar .nav-list ul li a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
})();
