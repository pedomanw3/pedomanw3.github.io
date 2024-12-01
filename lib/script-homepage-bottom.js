w3.displayObject("homepageCardGroup", homepagecardObject);
function homepagecardResponsive() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    w3.addClass(".homepage-content",
      "position-absolute start-50 translate-middle justify-content-center flex-nowrap");
  } else {
    w3.removeClass(".homepage-content",
      "position-absolute start-50 translate-middle justify-content-center flex-nowrap");
  }
}