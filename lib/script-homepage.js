function homepagecontentResizeTrue() {
  w3.addClass("#cardHomepageContent", "position-absolute top-50 start-50 translate-middle justify-content-center flex-nowrap");
  w3.addClass("#cardHomepageContent .card", "homepage-content-card");
}

function homepagecontentResizeFalse() {
  w3.removeClass("#cardHomepageContent", "position-absolute top-50 start-50 translate-middle justify-content-center flex-nowrap");
  w3.removeClass("#cardHomepageContent .card", "homepage-content-card");
}