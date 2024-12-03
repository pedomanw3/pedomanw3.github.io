/* w3 callback */
w3.includeHTML(listCallback);
/* List bottom callback */
function listCallback() {
  callbackEventListener();
  callbackDisplayObject();
  callbackGoogleCse();
}
/* Callback event Listener */
function callbackEventListener() {
  window.addEventListener('load', eventLoad);
  eventResize();
  window.addEventListener('resize', eventResize);
}
/* Callback display Object */
function callbackDisplayObject() {
  w3.getHttpObject("/data/topnav-object.js", blockTopnavObject);
  function blockTopnavObject(topnavObject) {
    w3.displayObject("listTopnav", topnavObject);
  }
}
/* Callback google cse */
function callbackGoogleCse() {
  /* move google cse to navbar */
  const navbarNav = document.getElementsByClassName("navbar-nav")[0];
  gcsePedomanW3 = document.getElementById("gcsePedomanW3");
  navbarNav.insertAdjacentElement("afterend", gcsePedomanW3);
  w3.removeClass("#gcsePedomanW3", "visually-hidden");
  /* add class to input element */
  w3.addClass("#gcsePedomanW3 .gsc-search-box-tools", "d-flex");
  w3.addClass("#gcsePedomanW3 .gsc-search-box-tools table", "w-100");
  w3.addClass("#gcsePedomanW3 .gsc-search-box-tools table td:nth-of-type(1)", "w-100");
  w3.addClass("#gcsePedomanW3 form input", "form-control");
  /* add class to submit button */
  w3.addClass("#gcsePedomanW3 form button", "btn btn-outline-success");
  w3.addClass("#gcsePedomanW3 form button svg", "text-success");
  /* remove class input element */
  w3.removeClass("#gcsePedomanW3 .gsc-control-cse-id", "gsc-control-cse");
  w3.removeClass("#gcsePedomanW3 form", "gsc-search-box");
  w3.removeClass("#gcsePedomanW3 form > table:nth-of-type(1)", "gsc-search-box");
  w3.removeClass("#gcsePedomanW3 form > table:nth-of-type(1) tr:nth-of-type(1) > td:nth-of-type(1)", "gsc-input");
  w3.removeClass("#gcsePedomanW3 form > table:nth-of-type(1) tr:nth-of-type(1) > td:nth-of-type(1) > div:nth-of-type(1)", "gsc-input-box");
  w3.removeClass("#gcsePedomanW3 form > table:nth-of-type(1) tr:nth-of-type(1) > td:nth-of-type(1) > div:nth-of-type(1) > table:nth-of-type(1)", "gsc-input");
  /* remove class to submit button */
  w3.removeClass("#gcsePedomanW3 form button", "gsc-search-button gsc-search-button-v2");
}
/* Event load */
function eventLoad() {
  loadReadyState();
}
/* Event resize */
function eventResize() {
  resizeNavbar();
  resizeFooter();
  resizeHomepageCard();
}
/* Load readyState */
function loadReadyState() {
  if (document.readyState === "complete") {
    w3.addClass("#bodyOverlay", "visually-hidden");
    w3.addClass("#loadingCardBody", "opacity-0");
    w3.removeClass("header", "opacity-0");
    w3.removeClass("main", "opacity-0");
    w3.removeClass("footer", "opacity-0");
  }
}
/* Resize Navbar */
function resizeNavbar() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    w3.removeClass(".navbar .container-lg", "px-md-4");
  } else {
    w3.addClass(".navbar .container-lg", "px-md-4");
  }
}
/* Resize author sign */
function resizeFooter() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    w3.addClass("#authorSign", "fixed-bottom");
  } else {
    w3.removeClass("#authorSign", "fixed-bottom");
  }
}
/* Resize homepage card */
function resizeHomepageCard() {
  const bodyTag = document.getElementsByTagName("body")[0];
  if (bodyTag.classList.contains("homepage")) {
    responsiveHomepageCard();
  }
}