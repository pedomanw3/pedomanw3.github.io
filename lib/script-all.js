/* readyState code block */
function readystateStatus() {
  if (document.readyState === "uninitialized") {
    w3.includeHTML(pedomanw3Callback);
    hideContentLoading();
    showContentUninitialized();
  } else if (document.readyState === "loading") {
    w3.includeHTML(pedomanw3Callback);
    hideContentUninitialized();
    showContentLoading();
    setInterval(function () { location.reload(); }, 3000);
  } else if (document.readyState === "loaded") {
    w3.includeHTML(pedomanw3Callback);
  } else if (document.readyState === "interactive") {
    w3.includeHTML(pedomanw3Callback);
  } else if (document.readyState === "complete") {
    w3.includeHTML(pedomanw3Callback);
    hideContentLoading();
    hideBodyOverlay();
    showSemantic();
  }
}
function hideBodyOverlay() {
  w3.addClass("#bodyOverlay", "visually-hidden");
}
function showBodyOverlay() {
  w3.removeClass("#bodyOverlay", "visually-hidden");
}
function hideContentUninitialized() {
  w3.addClass("#textUninitialized", "visually-hidden");
  w3.addClass("#iconUninitialized", "visually-hidden");
}
function showContentUninitialized() {
  w3.removeClass("#textUninitialized", "visually-hidden");
  w3.removeClass("#iconUninitialized", "visually-hidden");
}
function hideContentLoading() {
  w3.addClass("#textLoading", "visually-hidden");
  w3.addClass("#spinnerLoading", "visually-hidden");
}
function showContentLoading() {
  w3.removeClass("#textLoading", "visually-hidden");
  w3.removeClass("#spinnerLoading", "visually-hidden");
}
function hideSemantic() {
  w3.addClass("header", "opacity-0");
  w3.addClass("main", "opacity-0");
  w3.addClass("footer", "opacity-0");
}
function showSemantic() {
  w3.removeClass("header", "opacity-0");
  w3.removeClass("main", "opacity-0");
  w3.removeClass("footer", "opacity-0");
}

/* w3 Callback */
function pedomanw3Callback() {
  callbackDisplayObject();
  callbackEventListener();
  callbackBodyResize();
}
function callbackDisplayObject() {
  w3.getHttpObject("/lib/displayObject/topnav-object.js", blockTopnavObject);
  function blockTopnavObject(topnavObject) {
    w3.displayObject("listTopnav", topnavObject);
  }
}
function callbackEventListener() {
  window.addEventListener('resize', callbackBodyResize);
  const formControl = document.getElementsByClassName("form-control")[0];
  formControl.addEventListener("focusin", searchFocusIn);
  formControl.addEventListener("focusout", searchFocusOut);
}
function callbackBodyResize() {
  responsiveRightSearchPosition();
  widthSearchFocusIn();
  responsiveFooter();
  includeHomepageCardResponsive();
}
function responsiveRightSearchPosition() {
  let widthNavbar = document.querySelector(".navbar .container-lg").offsetWidth,
    formControl = document.getElementsByClassName("form-control")[0],
    searchButton = document.querySelector("nav form button");
  if (window.matchMedia("(min-width: 768px)").matches) {
    w3.addClass(".navbar .form-control", "position-fixed");
    let widthInput = ((window.innerWidth - widthNavbar) / 2) + searchButton.offsetWidth + 24 + "px";
    formControl.style.right = widthInput;
  } else {
    w3.removeClass(".navbar .form-control", "position-fixed");
    const formControl = document.getElementsByClassName("form-control")[0];
    formControl.removeAttribute("style");
  }
}
function searchFocusIn() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    w3.addClass(".navbar", "search-input-focused");
    w3.addClass(".navbar-nav", "opacity-0");
    widthSearchFocusIn();
  }
}
function searchFocusOut() {
  w3.removeClass(".navbar", "search-input-focused");
  w3.removeClass(".navbar-nav", "opacity-0");
  let formControl = document.getElementsByClassName("form-control")[0];
  formControl.style.maxWidth = null;
}
function widthSearchFocusIn() {
  const navBar = document.getElementsByClassName("navbar")[0];
  let formControl = document.getElementsByClassName("form-control")[0],
    offcanvas = document.getElementsByClassName("offcanvas")[0],
    searchButton = document.querySelector("nav form button");
  if (navBar.classList.contains("search-input-focused")) {
    formControl.style.maxWidth = offcanvas.offsetWidth - searchButton.offsetWidth - 24 + "px";
  }
}
function responsiveFooter() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    w3.removeClass("#authorSign", "fixed-bottom");
  } else {
    w3.addClass("#authorSign", "fixed-bottom");
  }
}
function includeHomepageCardResponsive() {
  const bodyTag = document.getElementsByTagName("body")[0];
  if (bodyTag.classList.contains("homepage")) {
    homepagecardResponsive();
  }
}