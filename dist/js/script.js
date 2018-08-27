// Declare variables for responsive Menu
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuNav = document.querySelector(".menu-nav");
// Initial state of showMenu
var showMenu = false;

// Declare variables for OnScroll NavBar

// responsive menu event function
menuBtn.addEventListener("click", function() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.remove("hide");
    menu.classList.add("show");
    home.classList.add("onScroll-menu");
    // set Menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menu.classList.add("hide");
    // set Menu state
    showMenu = false;
  }
});

// onScroll navBar event function
var header = document.getElementsByTagName("header")[0];
var home = document.getElementById("home");

window.onscroll = function() {
  if (window.pageYOffset > 100) {
    header.classList.add("sticky");
    home.classList.add("onScroll-menu");
  } else {
    header.classList.remove("sticky");
    home.classList.remove("onScroll-menu");
  }
};
