/* w3 Callback */
w3.includeHTML(listCallback);
function listCallback() {
  callbackEventListener();
  callbackDisplayObject();
  callbackGoogleCse();
}
/* Event Listener */
function callbackEventListener() {
  eventResize();
  window.addEventListener('resize', eventResize);
  function eventResize() {
    resizeNavbarContainer();
    resizeFooter();
    resizeHomepageCard();
  }
  window.addEventListener('load', readystateStatus);
}

/* readyState code block */
function readystateStatus() {
  if (document.readyState === "uninitialized") {
    addHiddenLoadingCardBody();
    removeHiddenUninitializedCardBody();
  } else if (document.readyState === "loading") {
    addHiddenUninitializedCardBody();
    removeHiddenLoadingCardBody();
    setInterval(function () { location.reload(); }, 3000);
  } else if (document.readyState === "loaded") {
  } else if (document.readyState === "interactive") {
  } else if (document.readyState === "complete") {
    addHiddenLoadingCardBody();
    addHiddenBodyOverlay();
    removeOpacitySemantic();
  }
}
function addHiddenBodyOverlay() {
  w3.addClass("#bodyOverlay", "visually-hidden");
}
function addHiddenUninitializedCardBody() {
  w3.addClass("#uninitializedCardBody", "visually-hidden");
}
function removeHiddenUninitializedCardBody() {
  w3.removeClass("#uninitializedCardBody", "visually-hidden");
}
function addHiddenLoadingCardBody() {
  w3.addClass("#loadingCardBody", "visually-hidden");
}
function removeHiddenLoadingCardBody() {
  w3.removeClass("#loadingCardBody", "visually-hidden");
}
function removeOpacitySemantic() {
  w3.removeClass("header", "opacity-0");
  w3.removeClass("main", "opacity-0");
  w3.removeClass("footer", "opacity-0");
}
function callbackDisplayObject() {
  w3.getHttpObject("/data/topnav-object.js", blockTopnavObject);
  function blockTopnavObject(topnavObject) {
    w3.displayObject("listTopnav", topnavObject);
  }
}
function callbackGoogleCse() {
  /* remove class from input element */
  w3.removeClass(".gsc-control-cse", "gsc-control-cse");
  w3.removeClass(".gsc-control-wrapper-cse", "gsc-control-wrapper-cse");
  w3.removeClass(".gsc-search-box", "gsc-search-box");
  w3.removeClass(".gsc-input", "gsc-input");
  w3.removeClass(".gsc-input-box", "gsc-input-box");
  document.getElementById("gs_id50").removeAttribute("style");
  w3.removeClass(".gsib_a", "gsib_a");
  document.getElementById("gsc-i-id1").removeAttribute("style");
  w3.removeClass(".gsib_b", "gsib_b");
  w3.removeClass(".gsst_b", "gsst_b");
  w3.removeClass(".gsst_a", "gsst_a");
  /* add class to input element */
  w3.addClass(".gsc-search-box-tools", "d-flex");
  w3.addClass(".gsc-search-box-tools table", "w-100");
  w3.addClass(".gsc-search-box-tools table td:nth-of-type(1)", "w-100");
  w3.addClass("#gsc-i-id1", "form-control");
  const formControl = document.getElementsByClassName("form-control")[0];
  formControl.setAttribute("placeholder", "Pencarian");
  /* remove class from submit button */
  w3.removeClass(".gsc-search-button", "gsc-search-button");
  w3.removeClass(".gsc-search-button-v2", "gsc-search-button-v2");
  /* add class to submit button */
  w3.addClass(".gsc-search-box-tools > table td:nth-of-type(2) > button", "btn btn-outline-success");
  const submitBtn = document.querySelector(".gsc-search-box-tools > table td:nth-of-type(2) > button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.firstChild.remove();
  const faMagnifyingGlass = document.getElementsByClassName("fa-magnifying-glass")[0];
  submitBtn.insertAdjacentElement("afterbegin", faMagnifyingGlass);
  const navbarNav = document.getElementsByClassName("navbar-nav")[0];
  gcsePedomanW3 = document.getElementById("gcsePedomanW3");
  navbarNav.insertAdjacentElement("afterend", gcsePedomanW3);
  w3.removeClass("#gcsePedomanW3", "visually-hidden");
  w3.addClass("#gs_tti50", "pe-2");
  w3.addClass("#gs_tti50 + td", "visually-hidden");
}
function resizeNavbarContainer() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    w3.removeClass(".navbar .container-lg", "px-md-4");
  } else {
    w3.addClass(".navbar .container-lg", "px-md-4");
  }
}
function resizeFooter() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    w3.addClass("#authorSign", "fixed-bottom");
  } else {
    w3.removeClass("#authorSign", "fixed-bottom");
  }
}
function resizeHomepageCard() {
  const bodyTag = document.getElementsByTagName("body")[0];
  if (bodyTag.classList.contains("homepage")) {
    responsiveHomepageCard();
  }
}