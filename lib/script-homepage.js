w3.includeHTML(pedomanw3Callback);

if (document.readyState === "uninitialized" || document.readyState === "loading") {
  document.getElementById("bodyLoad").classList.remove("visually-hidden");
}

function pedomanw3Callback() {
  /* Topnav Object */
  w3.getHttpObject("/lib/displayObject/object-topnav.js", functionObjectTopnav);
  function functionObjectTopnav(topnav) {
    w3.displayObject("listTopnav", topnav);
  }
  /* Homepage Content Object */
  w3.getHttpObject("/lib/displayObject/object-content-homepage.js", functionObjectContentHomepage);
  function functionObjectContentHomepage(contentHomepage) {
    w3.displayObject("cardHomepageContent", contentHomepage);
  }

  /* Homepage Content Callback */
  let heightHeader = document.getElementsByTagName("header")[0].offsetHeight,
    heightFooter = document.getElementsByTagName("footer")[0].offsetHeight,
    heightCardHomepage = document.getElementById("cardHomepageContent").offsetHeight,
    windowInnerHeight = window.innerHeight;

  let margintopCardHomepage = (windowInnerHeight - (2 * heightHeader) - heightFooter - heightCardHomepage) / 3.2 + "px";

  var declaration = document.styleSheets[1].cssRules[1].cssRules[0].style;
  declaration.setProperty("margin-top", margintopCardHomepage);

  if (document.readyState === "complete") {
    document.getElementById("bodyLoad").classList.add("visually-hidden");
    document.getElementsByTagName("footer")[0].classList.remove("visually-hidden");
    document.getElementsByTagName("main")[0].classList.remove("visually-hidden");
    document.getElementsByTagName("header")[0].classList.remove("visually-hidden");
  }
}