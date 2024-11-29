w3.includeHTML(pedomanw3Callback);

/* w3 Callback */
function pedomanw3Callback() {
  readystateStatus();
  
  /* Topnav Object */
  w3.getHttpObject("/lib/displayObject/object-topnav.js", functionObjectTopnav);
  function functionObjectTopnav(topnav) {
    w3.displayObject("listTopnav", topnav);
  };

  /* Homepage Content Object */
  w3.getHttpObject("/lib/displayObject/object-content-homepage.js", functionObjectContentHomepage);
  function functionObjectContentHomepage(contentHomepage) {
    w3.displayObject("cardHomepageContent", contentHomepage);
  };

  bodyResize();

  window.addEventListener("resize", bodyResize);

  let searchInput = document.querySelector("nav form input");
  searchInput.addEventListener("focusin", searchFocusIn);
  searchInput.addEventListener("focusout", searchFocusOut);
};

function bodyResize() {
  let bodyTag = document.getElementsByTagName("body")[0];
  if (bodyTag.classList.contains("homepage")) {
    homepagecontentResize();
  };
  if (window.matchMedia("(min-width: 768px)").matches) {
    pfixedSearchTrue();
  } else {
    pfixedSearchFalse();
  };
  let searchInput = document.querySelector("nav form input");
  if (searchInput.classList.contains("input-focused")) {
    searchwidthFocusIn();
  } else {
    removesearchwidthFocusOut();
  }
};

/* readyState Document */

function readystateStatus() {
  if (document.readyState === "uninitialized") {
    readystateUninitialized();
  } else if (document.readyState === "loading" || document.readyState === "loaded" || document.readyState === "interactive") {
    readystateLoading();
  } else if (document.readyState === "complete") {
    readystateComplete();
  };
};

function readystateUninitialized() {
  w3.removeClass("#bodyLoad", "visually-hidden");
  w3.removeClass("#textUninitialized", "visually-hidden");
  w3.removeClass("#iconUninitialized", "visually-hidden");
};

function readystateLoading() {
  w3.removeClass("#bodyLoad", "visually-hidden");
  w3.removeClass("#textLoading", "visually-hidden");
  w3.removeClass("#spinnerLoading", "visually-hidden");
  setInterval(function () {location.reload();}, 3000);
};

function readystateComplete() {
  w3.removeClass("header", "visually-hidden");
  w3.removeClass("main", "visually-hidden");
  w3.removeClass("footer", "visually-hidden");
  w3.addClass("#bodyLoad", "visually-hidden");
  w3.addClass("#textUninitialized", "visually-hidden");
  w3.addClass("#iconUninitialized", "visually-hidden");
  w3.addClass("#textLoading", "visually-hidden");
  w3.addClass("#spinnerLoading", "visually-hidden");
};

/* End of readyState Document */

function pfixedSearchTrue() {
  w3.addClass("nav form input", "position-fixed");
  let searchInput = document.querySelector("nav form input"),
    searchButton = document.querySelector("nav form button");
  let widthNavbar = document.querySelector(".navbar .container-md").offsetWidth;
  let widthInput = ((window.innerWidth - widthNavbar) / 2) + searchButton.offsetWidth + 12 + "px";
  searchInput.style.padding = "7px";
  searchInput.style.right = widthInput;
};

function pfixedSearchFalse() {
  w3.removeClass("nav form input", "position-fixed");
  let searchInput = document.querySelector("nav form input");
  searchInput.removeAttribute("style");
};

function searchFocusIn() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    w3.addClass("nav form input", "input-focused");
    searchwidthFocusIn();
  };
};

function searchFocusOut() {
  w3.removeClass("nav form input", "input-focused");
  removesearchwidthFocusOut();
};

function searchwidthFocusIn() {
  let searchInput = document.querySelector("nav form input"),
    searchButton = document.querySelector("nav form button"),
    offcanvas = document.getElementsByClassName("offcanvas")[0];
  searchInput.style.maxWidth = offcanvas.offsetWidth - searchButton.offsetWidth - 20 + "px";
};

function removesearchwidthFocusOut() {
  let searchInput = document.querySelector("nav form input");
  searchInput.style.maxWidth = null;
};