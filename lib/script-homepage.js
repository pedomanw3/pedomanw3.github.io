/* Homepage Content */
function homepagecontentResize() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    w3.addClass("#cardHomepageContent", "position-absolute top-50 start-50 translate-middle justify-content-center flex-nowrap");
    w3.addClass("#cardHomepageContent .card", "homepage-content-card");
  } else {
    w3.removeClass("#cardHomepageContent", "position-absolute top-50 start-50 translate-middle justify-content-center flex-nowrap");
    w3.removeClass("#cardHomepageContent .card", "homepage-content-card");
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    pfixedSearchTrue();
  } else {
    pfixedSearchFalse();
  }
}

function pfixedSearchTrue() {
  w3.addClass("nav form input", "position-fixed");
  var searchInput = document.querySelector("nav form input"),
    searchButton = document.querySelector("nav form button");
  var widthNavbar = document.querySelector(".navbar .container-md").offsetWidth;
  var widthInput = ((window.innerWidth - widthNavbar) / 2) + searchButton.offsetWidth + 12 + "px";
  searchInput.style.padding = "7px";
  searchInput.style.right = widthInput;
}

function pfixedSearchFalse() {
  w3.removeClass("nav form input", "position-fixed");
  var searchInput = document.querySelector("nav form input");
  searchInput.removeAttribute("style");
}

function searchFocusIn() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    var searchInput = document.querySelector("nav form input"),
      searchButton = document.querySelector("nav form button"),
      offcanvas = document.getElementsByClassName("offcanvas")[0];
    searchInput.style.maxWidth = offcanvas.offsetWidth - searchButton.offsetWidth - 20 + "px";
  }
}

function searchFocusOut() {
  var searchInput = document.querySelector("nav form input");
  searchInput.style.maxWidth = null;
}