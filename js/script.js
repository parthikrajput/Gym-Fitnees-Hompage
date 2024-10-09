window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 130);
});

// back to top
window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-to-top");

  if (window.scrollY > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

document.getElementById("back-to-top").addEventListener("click", function () {
  var scrollToTop = function () {
    var currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition - 20);
      setTimeout(scrollToTop, 5);
    }
  };

  scrollToTop();

  return false;
});

//open menu
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const nav = document.querySelector("nav");

  function openNav() {
    nav.classList.add("open");
  }

  function closeNav() {
    nav.classList.remove("open");
  }

  menuIcon.addEventListener("click", openNav);

  closeIcon.addEventListener("click", closeNav);
});
