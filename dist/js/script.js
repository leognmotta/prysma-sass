// Declare variables for responsive Menu
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuNav = document.querySelector(".menu-nav");
// Initial state of showMenu
var showMenu = false;

// Declare variables for OnScroll NavBar
var header = document.getElementsByTagName("header")[0];
var home = document.getElementById("home");

// responsive menu event function
menuBtn.addEventListener("click", function() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.remove("hide");
    menu.classList.add("show");
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
window.onscroll = function() {
  if (window.pageYOffset > 50) {
    header.classList.add("sticky");
    home.classList.add("onScroll-menu");
  } else {
    header.classList.remove("sticky");
    home.classList.remove("onScroll-menu");
  }
};

// #################################

var owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  items: 5,
  loop: true,
  margin: 1,
  responsiveClass: true,
  responsive: {
    0: {
      items: 3,
      nav: false
    },
    600: {
      items: 4,
      nav: false
    },
    1000: {
      items: 5
    }
  },
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true
});
$(".play").on("click", function() {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function() {
  owl.trigger("stop.owl.autoplay");
});
