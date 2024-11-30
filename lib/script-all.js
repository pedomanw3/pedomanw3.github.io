/* readyState code block */
function readystateStatus() {
  if (document.readyState === "uninitialized") {
    w3.includeHTML(pedomanw3Callback);
    hideSemantic();
    hideContentLoading();
  } else if (document.readyState === "loading") {
    w3.includeHTML(pedomanw3Callback);
    showContentLoading();
    hideContentUninitialized();
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
  w3.addClass("header", "opacity-100");
  w3.addClass("main", "opacity-100");
  w3.addClass("footer", "opacity-100");
}
function showSemantic() {
  w3.removeClass("header", "opacity-100");
  w3.removeClass("main", "opacity-100");
  w3.removeClass("footer", "opacity-100");
}

/* w3 Callback */
function pedomanw3Callback() {
  topnavDisplayObject();
  homepageDisplayObject();
  bodyResize();
  window.addEventListener('resize', bodyResize);
  const searchInput = document.querySelector("nav form input");
  searchInput.addEventListener("focusin", searchFocusIn);
  searchInput.addEventListener("focusout", searchFocusOut);
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
  const bodyTag = document.getElementsByTagName("body")[0]
  if (bodyTag.classList.contains("homepage")) {
    homepagecontentResize();
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    searchAdjustPosition();
  } else {
    searchRestorePosition();
  }
  const searchInput = document.querySelector("nav form input");
  if (searchInput.classList.contains("input-focused")) {
    widthSearchFocusIn();
  } else {
    widthSearchFocusOut();
  }
}
function searchAdjustPosition() {
  w3.addClass("nav form input", "position-fixed");
  let widthNavbar = document.querySelector(".navbar .container-md").offsetWidth,
    searchInput = document.querySelector("nav form input"),
    searchButton = document.querySelector("nav form button");
  let widthInput = ((window.innerWidth - widthNavbar) / 2) + searchButton.offsetWidth + 12 + "px";
  searchInput.style.padding = "7px";
  searchInput.style.right = widthInput;
}
function searchRestorePosition() {
  w3.removeClass("nav form input", "position-fixed");
  const searchInput = document.querySelector("nav form input");
  searchInput.removeAttribute("style");
}
function searchFocusIn() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    w3.addClass("nav form input", "input-focused");
    w3.addClass(".navbar-nav", "opacity-0");
    widthSearchFocusIn();
  }
}
function searchFocusOut() {
  w3.removeClass("nav form input", "input-focused");
  w3.removeClass(".navbar-nav", "opacity-0");
  widthSearchFocusOut();
}
function widthSearchFocusIn() {
  let searchInput = document.querySelector("nav form input"),
    offcanvas = document.getElementsByClassName("offcanvas")[0],
    searchButton = document.querySelector("nav form button");
  searchInput.style.maxWidth = offcanvas.offsetWidth - searchButton.offsetWidth - 20 + "px";
}
function widthSearchFocusOut() {
  let searchInput = document.querySelector("nav form input");
  searchInput.style.maxWidth = null;
}