/* w3 Callback */
function pedomanw3Callback() {
  callbackDisplayObject();
  callbackEventListener();
  callbackBodyResize();
}
function callbackDisplayObject() {
  w3.getHttpObject("/data/topnav-object.js", blockTopnavObject);
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
  responsiveNavbarContainer();
  responsiveRightSearchPosition();
  widthSearchFocusIn();
  responsiveFooter();
  includeHomepageCardResponsive();
}
function responsiveNavbarContainer() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    w3.removeClass(".navbar .container-lg", "px-md-4");
  } else {
    w3.addClass(".navbar .container-lg", "px-md-4");
  }
}
function responsiveRightSearchPosition() {
  let widthNavbar = document.querySelector(".navbar .container-lg").offsetWidth,
    formControl = document.getElementsByClassName("form-control")[0],
    searchForm = document.querySelector(".navbar form");
  if (window.matchMedia("(min-width: 768px)").matches) {
    w3.addClass(".form-control", "position-fixed");
    let widthInput = ((window.innerWidth - widthNavbar) / 2) + searchForm.offsetWidth + "px";
    formControl.style.right = widthInput;
  } else {
    w3.removeClass(".form-control", "position-fixed");
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
    searchForm = document.querySelector(".navbar form");
  if (navBar.classList.contains("search-input-focused")) {
    formControl.style.maxWidth = offcanvas.offsetWidth - searchForm.offsetWidth - 16 + "px";
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