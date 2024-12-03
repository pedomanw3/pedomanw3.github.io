/* w3 callback */
w3.includeHTML(listCallback);
/* List bottom callback */
function listCallback() {
  callbackEventListener();
  callbackDisplayObject();
  callbackReadyState();
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
/* Callback readyState */
function callbackReadyState() {
  if (document.readyState === "loaded" || 
    document.readyState === "interactive" || document.readyState === "complete") {
    w3.addClass("#bodyOverlay", "visually-hidden");
    w3.addClass("#loadingCardBody", "opacity-0");
    w3.removeClass("header", "opacity-0");
    w3.removeClass("main", "opacity-0");
    w3.removeClass("footer", "opacity-0");
  }
}
/* Event load */
function eventLoad() {
  loadGoogleCse();
}
/* Event resize */
function eventResize() {
  resizeNavbar();
  resizeFooter();
  resizeHomepageCard();
}
/* Load google cse */
function loadGoogleCse() {
  /* move google cse to navbar */
  const navbarNav = document.getElementsByClassName("navbar-nav")[0],
    gcsePedomanW3 = document.getElementById("gcsePedomanW3"),
    SubmitBtn = document.querySelector("#gcsePedomanW3 form button"),
    famagnifyingglass = document.getElementById("famagnifyingglass");
  SubmitBtn.firstChild.remove();
  SubmitBtn.insertAdjacentElement("afterbegin", famagnifyingglass);
  navbarNav.insertAdjacentElement("afterend", gcsePedomanW3);
  w3.removeClass("#gcsePedomanW3", "visually-hidden");
  /* add class to input element */
  w3.addClass("#gcsePedomanW3", "pt-2 pt-md-0");
  w3.addClass("#gcsePedomanW3 form", "d-flex");
  w3.addClass("#gcsePedomanW3 form table", "w-100");
  w3.addClass("#gcsePedomanW3 form > table:nth-of-type(1) > tbody > tr > td", "w-100 pe-2");
  w3.addClass("#gcsePedomanW3 form input", "form-control");
  document.querySelector("#gcsePedomanW3 form input").setAttribute("placeholder", "Pencarian");
  w3.addClass("#gcsePedomanW3 .gsib_b", "visually-hidden");
  /* add class to submit button */
  w3.addClass("#gcsePedomanW3 form button", "btn btn-w3-shamrock btn-outline-dark");
  document.querySelector("#gcsePedomanW3 form button").setAttribute("type", "submit");
  /* remove class input element */
  w3.removeClass("#gcsePedomanW3 .gsc-control-cse", "gsc-control-cse");
  w3.removeClass("#gcsePedomanW3 .gsc-search-box", "gsc-search-box");
  w3.removeClass("#gcsePedomanW3 .gsc-input", "gsc-input");
  w3.removeClass("#gcsePedomanW3 .gsc-input-box", "gsc-input-box");
  w3.removeClass("#gcsePedomanW3 .gsib_a", "gsib_a");
  document.querySelector("#gcsePedomanW3 form input").removeAttribute("style");
  document.querySelector("#gcsePedomanW3 #gs_id50").removeAttribute("style");
  /* remove class to submit button */
  w3.removeClass("#gcsePedomanW3 form button", "gsc-search-button gsc-search-button-v2");
}
/* Resize Navbar */
function resizeNavbar() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    w3.removeClass(".navbar .container-lg", "px-md-4");
  } else {
    w3.addClass(".navbar .container-lg", "px-md-4");
  }
}
/* Resize Navbar */
function resizeFooter() {
  const headerTag = document.getElementsByTagName("header")[0],
  mainTag = document.getElementsByTagName("main")[0],
  footerTag = document.getElementsByTagName("footer")[0];
  let totalHeight = headerTag.offsetHeight + mainTag.offsetHeight + footerTag.offsetHeight;
  if (window.innerHeight > totalHeight) {
    w3.addClass("footer", "fixed-bottom");
  } else {
    w3.removeClass("footer", "fixed-bottom");
  }
}
/* Resize homepage card */
function resizeHomepageCard() {
  const bodyTag = document.getElementsByTagName("body")[0];
  if (bodyTag.classList.contains("homepage")) {
    responsiveHomepageCard();
  }
}