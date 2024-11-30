function homepagecontentResize() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    homepagecontentResizeTrue();
  } else {
    homepagecontentResizeFalse();
  }
}
function homepagecontentResizeTrue() {
  w3.addClass("#cardHomepageContent", "position-absolute top-50 start-50 translate-middle justify-content-center flex-nowrap");
}
function homepagecontentResizeFalse() {
  w3.removeClass("#cardHomepageContent", "position-absolute top-50 start-50 translate-middle justify-content-center flex-nowrap");
}