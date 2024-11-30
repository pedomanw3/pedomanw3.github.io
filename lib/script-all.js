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
  topnavDisplayObject();
  homepageDisplayObject();
  bodyResize();
  window.addEventListener('resize', bodyResize);
  const formControl = document.querySelector(".navbar .form-control");
  formControl.addEventListener("focusin", searchFocusIn);
  formControl.addEventListener("focusout", searchFocusOut);
}
function topnavDisplayObject() {
  w3.getHttpObject("/lib/displayObject/object-topnav.js", functionObjectTopnav);
  function functionObjectTopnav(topnav) {
    w3.displayObject("listTopnav", topnav);
  }
}
function homepageDisplayObject() {
  w3.getHttpObject("/lib/displayObject/object-content-homepage.js", functionObjectContentHomepage);
  function functionObjectContentHomepage(contentHomepage) {
    w3.displayObject("cardHomepageContent", contentHomepage);
  }
}
function bodyResize() {
  const bodyTag = document.getElementsByTagName("body")[0];
  if (bodyTag.classList.contains("homepage")) {
    homepagecontentResize();
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    searchAdjustPosition();
  } else {
    searchRestorePosition();
  }
  const formControl = document.querySelector(".navbar .form-control");
  if (formControl.classList.contains("search-input-focused")) {
    widthSearchFocusIn();
  } else {
    widthSearchFocusOut();
  }
}
function searchAdjustPosition() {
  w3.addClass(".navbar .form-control", "position-fixed");
  let widthNavbar = document.querySelector(".navbar .container-md").offsetWidth,
    formControl = document.querySelector(".navbar .form-control"),
    searchButton = document.querySelector("nav form button");
  let widthInput = ((window.innerWidth - widthNavbar) / 2) + searchButton.offsetWidth + 12 + "px";
  formControl.style.padding = "7px";
  formControl.style.right = widthInput;
}
function searchRestorePosition() {
  w3.removeClass(".navbar .form-control", "position-fixed");
  const formControl = document.querySelector(".navbar .form-control");
  formControl.removeAttribute("style");
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
  widthSearchFocusOut();
}
function widthSearchFocusIn() {
  let formControl = document.querySelector(".navbar .form-control"),
    offcanvas = document.getElementsByClassName("offcanvas")[0],
    searchButton = document.querySelector("nav form button");
  formControl.style.maxWidth = offcanvas.offsetWidth - searchButton.offsetWidth - 20 + "px";
}
function widthSearchFocusOut() {
  let formControl = document.querySelector(".navbar .form-control");
  formControl.style.maxWidth = null;
}