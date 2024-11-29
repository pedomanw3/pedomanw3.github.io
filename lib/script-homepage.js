/* Homepage Content */
function homepageContent() {
  let heightHeader = document.getElementsByTagName("header")[0].offsetHeight,
    heightFooter = document.getElementsByTagName("footer")[0].offsetHeight,
    heightCardHomepage = document.getElementById("cardHomepageContent").offsetHeight,
    windowInnerHeight = window.innerHeight;

  let margintopCardHomepage = (windowInnerHeight - (2 * heightHeader) - heightFooter - heightCardHomepage) / 3.2 + "px";

  var declaration = document.styleSheets[2].cssRules[1].cssRules[0].style;
  declaration.setProperty("margin-top", margintopCardHomepage);
}